import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import NavBar from "../pages/navbar/NavBar";

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');

    return (
        <div>

            <header>
                {noHeaderFooter ? null : <NavBar></NavBar>}
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className="mt-20">
                {noHeaderFooter ? null : <Footer></Footer>}
            </footer>

        </div>
    );
};

export default Main;