import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GlobalContext } from "../provider/AuthProvider";
import { RxAvatar } from "react-icons/rx";
import ThemeController from "./ThemeController";


const Navbar = () => {
    const { loading, user, userLogOut } = useContext(GlobalContext);

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3 text-md">
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Home</NavLink>
                        <NavLink to='/all-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>All Equipments</NavLink>
                        <NavLink to='/add-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Add Equipment</NavLink>
                        <NavLink to='/my-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>My Equipment</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-lg md:text-2xl lg:text-4xl text-green-700">EquiSports</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-10">
                    <NavLink to='/' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Home</NavLink>
                    <NavLink to='/all-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>All Equipments</NavLink>
                    <NavLink to='/add-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Add Equipment</NavLink>
                    <NavLink to='/my-equipment' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>My Equipment</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-5 text-xs md:text-sm">
                {
                    loading ? <span className="loading loading-spinner loading-md"></span>
                        :
                        user ? (
                            user.photoURL ?
                                <div className="flex gap-5 items-center">
                                    <div className="group">
                                        <img src={user.photoURL} className="h-[35px] w-[35px] md:h-[50px] md:w-[50px] rounded-full hover" referrerPolicy="no-referrer"></img>
                                        <p className="z-10 px-2 py-1 absolute text-center bg-black text-white text-sm font-bold hidden group-hover:block">
                                            {user.displayName}</p>
                                    </div>
                                    <div onClick={() => userLogOut()} className="btn bg-rose-600 text-white text-xs md:text-base p-1 md:p-2">Logout</div>
                                </div>
                                :
                                <div className="flex gap-5 items-center">
                                    <div className="text-5xl group">
                                        <RxAvatar />
                                        <p className="z-10 px-2 py-1 absolute text-center bg-black text-white text-sm font-bold hidden group-hover:block">
                                            {user.displayName}</p>
                                    </div>
                                    <div onClick={() => userLogOut()} className="btn bg-rose-600 text-white text-xs md:text-base p-1 md:p-2">Logout</div>
                                </div>
                        )
                            :
                            (
                                <div className="flex gap-5 items-center">
                                    <NavLink to='/login' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Login</NavLink>
                                    <NavLink to='/registration' className={({ isActive }) => (isActive ? "text-green-500 font-bold" : "")}>Register</NavLink>
                                </div>
                            )
                }
                <ThemeController></ThemeController>
            </div>
        </div>
    );
};

export default Navbar;