import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { GlobalContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import ProductCards from "../components/ProductCards";
import CategoriesCard from "../components/CategoriesCard";
import VideoContainer from "../components/VideoContainer";
import MemberCard from "../components/MemberCard";

const HomePage = () => {
    const { serverURL } = useContext(GlobalContext);
    const [loadingEqp, setLoadingEqp] = useState(true);
    const [allEquipments, setAllEquipments] = useState([]);

    const getAllEquipments = async () => {
        const res = await fetch(`${serverURL}/get-all-equipment`);
        const data = await res.json();
        setAllEquipments([...data]);
        setLoadingEqp(false);
    }

    useEffect(() => {
        getAllEquipments();
    }, []);

    if (loadingEqp) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Slider></Slider>
            <h1 className="text-center mt-10 mb-5 md:mt-20 md:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-green-500">Some of our latest products</h1>
            <ProductCards allEquipments={allEquipments.slice(-6)}></ProductCards>
            <h1 className="text-center mt-10 mb-5 md:mt-20 md:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-green-500">Sports categories</h1>
            <CategoriesCard allEquipments={allEquipments}></CategoriesCard>
            <h1 className="text-center mt-10 mb-5 md:mt-20 md:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-green-500">A small video about us</h1>
            <VideoContainer></VideoContainer>
            <h1 className="text-center mt-10 mb-5 md:mt-20 md:mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-green-500">Become a member</h1>
            <MemberCard></MemberCard>
        </div>
    );
};

export default HomePage;