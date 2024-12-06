import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <header className="bg-white shadow-md py-2">
                <Navbar></Navbar>
            </header>
            <main className="min-h-screen">
                <Outlet></Outlet>
            </main>
            <footer className="">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;