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
                        src="https://i.ibb.co.com/9HtVfFL/icons8-team-m0o-STE-Mjs-I-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide3" className="btn btn-circle">❮</Link>
                        <Link to="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-green-500 bottom-5 right-2 text-right">
                        <p>Confused about your career.</p>
                        <p>Join Us.</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/8B9WhNR/austin-distel-w-D1-LRb9-Oe-Eo-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide1" className="btn btn-circle">❮</Link>
                        <Link to="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-green-500 bottom-5 right-2 text-right">
                        <p>We have top-notch carrer coach,</p>
                        <p>who can assist you</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/gv0d2fk/brooke-lark-n-Mff-L1zjbw4-unsplash.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link to="#slide2" className="btn btn-circle">❮</Link>
                        <Link to="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                    <div className="absolute text-lg md:text-3xl lg:text-7xl font-semibold text-green-500 bottom-5 right-2 text-right">
                        <p>With our help,</p>
                        <p>shine at your career.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;