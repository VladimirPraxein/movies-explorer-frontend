class MoviesApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
    }

    processRequest(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(this.baseUrl, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(this.processRequest)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;