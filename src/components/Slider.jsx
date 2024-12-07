import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Slider = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <div>
            <div className="carousel w-full h-[300px] md:h-[600px] lg:h-[900px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/4RcPTdN/kenny-nguy-n-Qqi-Dtb-Mr-Dw-U-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide3" className="btn btn-circle">❮</Link>
                        <Link to="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-white bottom-5 right-2 text-right">
                        <p>Want to buy sports equipment?</p>
                        <p>Buy from us</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/GFX7r1v/chris-robert-ucm-HMA2448s-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide1" className="btn btn-circle">❮</Link>
                        <Link to="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-white bottom-5 right-2 text-right">
                        <p>We have all the equipments,</p>
                        <p>You need</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/J3x2k63/munbaik-cycling-clothing-2-Jst9-HK5peo-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide2" className="btn btn-circle">❮</Link>
                        <Link to="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-white bottom-5 right-2 text-right">
                        <p>We provide original and</p>
                        <p>authentic product</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;