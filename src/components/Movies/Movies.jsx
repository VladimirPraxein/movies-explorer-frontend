import React from "react"

import Layout from "../Layout/Layout"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"

export default function Movies({ onSearchMovies, isFilteredMovies, filteredMovies, setFilteredMovies, errorMovies, onSaveMovie, savedMovies, onDeleteMovie, loggedIn, onChangeMoviesOnPage, amountMovies, onShowMoreMovies }) {

    return (
        <Layout loggedIn={loggedIn} available={true}>
            <main>
                <SearchForm pageMovies={true} onSearchMovies={onSearchMovies} onChangeMoviesOnPage={onChangeMoviesOnPage}></SearchForm>
                <MoviesCardList
                    pageMovies={true}
                    isFilteredMovies={isFilteredMovies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    errorMovies={errorMovies}
                    amountMovies={amountMovies}
                    onChangeMoviesOnPage={onChangeMoviesOnPage}
                    onSaveMovie={onSaveMovie}
                    savedMovies={savedMovies}
                    onDeleteMovie={onDeleteMovie}
                    onShowMoreMovies={onShowMoreMovies}
                >
                </MoviesCardList>
            </main>
        </Layout>
    )
}