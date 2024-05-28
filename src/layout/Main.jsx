import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import NavBar from "../pages/navbar/NavBar";

const Main = () => {
    return (
        <div>

            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className="mt-20">
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Main;