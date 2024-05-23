import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import NavBar from "../pages/navbar/NavBar";

const Main = () => {
    return (
        <div>

            <header>
                <NavBar></NavBar>
            </header>

            <main className='max-w-screen-xl mx-auto'>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Main;