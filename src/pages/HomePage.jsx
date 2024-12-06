import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { GlobalContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import ProductCards from "../components/ProductCards";
import CategoriesCard from "../components/CategoriesCard";

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
            <h1 className="text-center mt-20 mb-10 text-5xl font-bold text-green-500">Some of our latest products</h1>
            <ProductCards allEquipments={allEquipments.slice(-6)}></ProductCards>
            <h1 className="text-center mt-20 mb-10 text-5xl font-bold text-green-500">Sports categories</h1>
            <CategoriesCard allEquipments={allEquipments}></CategoriesCard>
        </div>
    );
};

export default HomePage;