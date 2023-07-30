import React from "react"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Layout from "../Layout/Layout"

export default function SavedMovies({loggedIn, savedMovies, handleDeleteMovie, onSearchSavedMovies, isFilteredSavedMovies, filteredSavedMovies, onDeleteMovie}) {
    return (
        <Layout loggedIn={loggedIn} available={true}>
            <main>
                <SearchForm pageMovies={false} onSearchMovies={onSearchSavedMovies}></SearchForm>
                <MoviesCardList pageMovies={false} savedMovies={savedMovies} handleDeleteMovie={handleDeleteMovie} filteredSavedMovies={filteredSavedMovies} isFilteredSavedMovies={isFilteredSavedMovies} onDeleteMovie={onDeleteMovie}></MoviesCardList>
            </main>
        </Layout>
    )
}