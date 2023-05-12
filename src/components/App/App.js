import { Route, Routes } from 'react-router-dom';

import "../../styles/index.css";
import styles from './App.module.css'

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className={styles.page}>
      <Routes>
        <Route path='/' exact element={<Main />}>
        </Route>
        <Route path='/movies' exact element={<Movies />}>
        </Route>
        <Route path='/saved-movies' exact element={<SavedMovies />}>
        </Route>
        <Route path='/profile' exact element={<Profile />}>
        </Route>
        <Route path='/signup' exact element={<Register />}>
        </Route>
        <Route path='/signin' exact element={<Login />}>
        </Route>
        <Route path='/404' exact element={<NotFound />}>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
