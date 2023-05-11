import React from "react"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function SavedMovies() {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <SearchForm></SearchForm>
                <MoviesCardList pageMovies={false}></MoviesCardList>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}