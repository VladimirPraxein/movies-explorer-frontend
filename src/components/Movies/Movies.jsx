import React from "react"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"

export default function Movies() {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <SearchForm></SearchForm>
                <MoviesCardList pageMovies={true}></MoviesCardList>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}