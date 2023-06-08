import React from 'react';

import Layout from '../Layout/Layout';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

export default function Main({loggedIn}) {
    return (
        <Layout loggedIn={loggedIn} available={true}>
            <main>
                <Promo></Promo>
                <NavTab></NavTab>
                <AboutProject></AboutProject>
                <Techs></Techs>
                <AboutMe></AboutMe>
                <Portfolio></Portfolio>
            </main>
        </Layout>
    )
}
