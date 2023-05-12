import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Main() {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <Promo></Promo>
                <NavTab></NavTab>
                <AboutProject></AboutProject>
                <Techs></Techs>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}
