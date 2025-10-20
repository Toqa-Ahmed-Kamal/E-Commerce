import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Components/Css/NavBar.css';

export default function Sekelton(){
    const location = useLocation();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 200);
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // hide on login and register pages
    const hideOn = ['/login', '/register'];
    const isHidden = hideOn.includes(location.pathname);

    return <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        {!isHidden && show && (
            <button className="scroll-top" onClick={handleClick} aria-label="Scroll to top">
                ↑
            </button>
        )}
    </>
}