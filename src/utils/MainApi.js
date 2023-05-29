class MainApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
    }

    processRequest(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUser() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this.processRequest)
    }

    updateUser(name, email) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(this.processRequest)
    }

    getMovies() {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this.processRequest)
    }

    saveMovie(movie) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            })
        })
            .then(this.processRequest)
    }

    deleteMovie(movieId) {
        return fetch(`${this.baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
            }
        })
            .then(this.processRequest)
    }

    register = (name, password, email) => {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password, email })
        })
            .then(this.processRequest)
            .then((data) => {
                localStorage.setItem("token", data.token);
                return data;
            });
    };

    authorize = (password, email) => {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, email })
        })
            .then(this.processRequest)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    return data;
                } else {
                    return;
                }
            });
    };
}

const mainApi = new MainApi({
    baseUrl: 'https://api.movie.project.student.nomoredomains.monster',
});

export default mainApi;