import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import "../../styles/index.css";
import styles from './App.module.css'

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

import { serverError, conflict, loginError } from '../../utils/errorMessages';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isFilteredMovies, setIsFilteredMovies] = useState(false);
  const [errorMovies, serErrorMovies] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isFilteredSavedMovies, setIsFilteredSavedMovies] = useState(false);
  const [errorRegister, setErrorRegister] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [errorUpdateUser, setErrorUpdateUser] = useState('');
  const [succesUpdateUser, setSuccesUpdateUser] = useState('');
  const [amountMovies, setAmoutnMovies] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (loggedIn) {
      setPreloader(true);
      mainApi.getUser()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setPreloader(false))
    }
  }, [loggedIn]);

  useEffect(() => {
    if (token) {
      setPreloader(true);
      mainApi.getUser()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate({ replace: false });
          }
        })
        .catch((e) => console.log(e))
        .finally(() => setPreloader(false))
    }
  }, [token])

  useEffect(() => {
    if (loggedIn) {
      setPreloader(true);
      moviesApi.getMovies()
        .then((films) => {
          setMovies(films);
        })
        .catch(() => {
          serErrorMovies(serverError)
        })
        .finally(() => setPreloader(false))
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      setPreloader(true);
      mainApi.getMovies()
        .then((films) => {
          setSavedMovies(films);
        })
        .catch(() => {
          serErrorMovies(serverError)
        })
        .finally(() => setPreloader(false))
    }
  }, [loggedIn]);

  useEffect(() => {
    if (localStorage.getItem('foundMovies')) {
      setFilteredMovies(JSON.parse(localStorage.getItem('foundMovies')));
      setIsFilteredMovies(true);
      handleChangeMoviesOnPage();
    }
  }, [])

  function handleRegister(name, password, email) {
    mainApi.register(name, password, email)
      .then(() => {
        handleLogin(password, email)
        navigate("/movies");
      })
      .catch(err => {
        if (err === 'Ошибка: 409') {
          setErrorRegister(conflict);
        } else {
          setErrorRegister(serverError)
        }
      })
  }

  function handleLogin(password, email) {
    mainApi.authorize(password, email)
      .then((data) => {
        localStorage.setItem('token', data.token);
      })
      .then(() => {
        setLoggedIn(true);
      })
      .then(() => {
        navigate("/movies");
      })
      .catch(err => {
        if (err === 'Ошибка: 401') {
          setErrorLogin(loginError);
        } else {
          setErrorLogin(serverError)
        }
      })
  }

  function signOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    setIsFilteredMovies(false);
  }

  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then((dataUser) => {
        setSuccesUpdateUser('Успешно');
        setCurrentUser(dataUser);
      })
      .catch(err => {
        if (err === 'Ошибка: 409') {
          setErrorUpdateUser(conflict);
        } else {
          setErrorUpdateUser(serverError)
        }
      })
  }

  function handleSearchMovies(nameMovie, checkbox) {
    localStorage.setItem('nameMovie', JSON.stringify(nameMovie));
    localStorage.setItem('checkbox', JSON.stringify(checkbox));
    setIsFilteredMovies(true);
    let foundMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(nameMovie.toLowerCase()));
    let shortMovies = foundMovies.filter((movie) => movie.duration <= 40);
    if (checkbox) {
      foundMovies = shortMovies;
    }
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    setFilteredMovies(foundMovies);
  }

  function handleSearchSavedMovies(nameMovie, checkbox) {
    setIsFilteredSavedMovies(true)
    let foundMovies = savedMovies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(nameMovie.toLowerCase()));
    let shortMovies = foundMovies.filter((movie) => movie.duration <= 40);
    if (checkbox) {
      foundMovies = shortMovies;
    }
    setFilteredSavedMovies(foundMovies);
  }


  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
        console.log(savedMovies)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {

    mainApi.deleteMovie(movie._id)

      .then(() => {

        setSavedMovies(savedMovies.filter((savedMovie) => savedMovie._id !== movie._id));
      })
      .catch((err) => {
        console.log(movie)
        console.log(err);
      });
  }

  function handleChangeMoviesOnPage() {
    if (window.innerWidth < 890) {
      setAmoutnMovies(5);
    } else if (window.innerWidth < 1280) {
      setAmoutnMovies(8);
    } else {
      setAmoutnMovies(12);
    }
  };

  function handleShowMoreMovies() {
    if (window.innerWidth < 1280) {
      setAmoutnMovies(amountMovies + 2)
    } else {
      setAmoutnMovies(amountMovies + 3)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={styles.page}>
        {
          preloader
            ?
            <Preloader></Preloader>
            :
            <Routes>
              <Route path='/' exact element={<Main loggedIn={loggedIn} />}>
              </Route>
              <Route path='/movies'
                element={<ProtectedRoute
                  pageLogin={false}
                  component={Movies}
                  movies={movies}
                  onSearchMovies={handleSearchMovies}
                  isFilteredMovies={isFilteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  filteredMovies={filteredMovies}
                  errorMovies={errorMovies}
                  onSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  loggedIn={loggedIn}
                  amountMovies={amountMovies}
                  onChangeMoviesOnPage={handleChangeMoviesOnPage}
                  onShowMoreMovies={handleShowMoreMovies}>
                </ProtectedRoute>}>
              </Route>
              <Route path='/saved-movies'
                element={<ProtectedRoute
                  pageLogin={false}
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  onSearchSavedMovies={handleSearchSavedMovies}
                  isFilteredSavedMovies={isFilteredSavedMovies}
                  filteredSavedMovies={filteredSavedMovies}>
                </ProtectedRoute>}>
              </Route>
              <Route path='/profile'
                element={<ProtectedRoute
                  pageLogin={false}
                  component={Profile}
                  loggedIn={loggedIn}
                  onUpdateUser={handleUpdateUser}
                  errorUpdateUser={errorUpdateUser}
                  succesUpdateUser={succesUpdateUser}
                  setSuccesUpdateUser={setSuccesUpdateUser}
                  setErrorUpdateUser={setErrorUpdateUser}
                  signOut={signOut}>
                </ProtectedRoute>}>
              </Route>
              <Route path='/signup'
                element={<ProtectedRoute
                  pageLogin={true}
                  loggedIn={loggedIn}
                  component={Register}
                  onRegister={handleRegister}
                  errorRegister={errorRegister}>
                </ProtectedRoute>}>
              </Route>
              <Route path='/signin'
                element={<ProtectedRoute
                  pageLogin={true}
                  loggedIn={loggedIn}
                  component={Login}
                  onLogin={handleLogin}
                  errorLogin={errorLogin}>
                </ProtectedRoute>}>
              </Route>
              <Route path='*' exact element={<NotFound />}>
              </Route>
            </Routes>
        }

      </div >
    </CurrentUserContext.Provider >
  );
}

export default App;
