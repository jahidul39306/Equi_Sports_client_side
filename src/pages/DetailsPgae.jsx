import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { GlobalContext } from "../provider/AuthProvider";

const DetailsPgae = () => {

    const params = useParams();
    const id = params.id;
    const [loadingEqp, setLoadingEqp] = useState(true);
    const [equipment, setEquipment] = useState();
    const { serverURL } = useContext(GlobalContext);
    const defaultImage = 'https://i.ibb.co.com/VYq7sVq/sports-at-school.webp';

    const getEquipment = async () => {
        try {
            const res = await fetch(`${serverURL}/get-equipment/${id}`);
            const data = await res.json();
            setEquipment(data);
            setLoadingEqp(false);
        }
        catch{
            setLoadingEqp(false);
        }
    }

    useEffect(() => {
        getEquipment();
    }, []);

    if (loadingEqp) {
        return <Loading></Loading>
    }

    return (
        <div className="max-w-5xl mx-auto mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center shadow-lg rounded-lg p-4 gap-5 md:gap-10 bg-pink-200">
                <div className="flex-grow">
                    <img
                        src={equipment.imageUrl || defaultImage}
                        alt=""
                        onError={(e) => {
                            e.target.src = defaultImage;
                        }}
                        className="h-[200px] md:h-[500px] w-full rounded-md" />
                </div>
                <div className="text-sm md:text-lg space-y-2 md:space-y-5">
                    <h2 className="text-lg md:text-2xl font-bold">{equipment.itemName}</h2>
                    <p className="font-bold">Description:</p>
                    <p>{equipment.description}</p>
                    <p className="font-semibold">Category: <span className="p-1 md:p-2 bg-purple-200 border border-purple-500 rounded-xl">{equipment.category}</span></p>
                    <p className="font-semibold">Pricing: <span className="p-1 md:p-2 bg-green-200 border border-green-500 rounded-xl">{equipment.price}</span></p>
                    <p className="font-semibold">Processing time: {equipment.processingTime} days</p>
                    <p className="font-semibold">Items left: <span className="p-1 md:p-2 bg-orange-200 border border-orange-500 rounded-xl">{equipment.quantity}</span></p>
                    <p className="font-semibold">Rating: <span className="p-1 md:p-2 bg-yellow-200 border border-yellow-500 rounded-xl">{equipment.rating ? equipment.rating : 'N/A'}</span></p>
                    <p className="font-semibold">Customization: {equipment.customization ? equipment.customization : 'N/A'}</p>
                    <p className="font-semibold">Equipment added by: <span className="p-1 md:p-2 bg-purple-200 border border-purple-500 rounded-xl">{equipment.userEmail}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DetailsPgae;