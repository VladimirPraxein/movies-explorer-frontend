import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children, loggedIn, available }) {
    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            {children}
            <Footer available={available} />
        </>
    );
}

export default Layout;