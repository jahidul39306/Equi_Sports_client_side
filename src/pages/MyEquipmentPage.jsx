import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const MyEquipmentPage = () => {
    const defaultImage = 'https://i.ibb.co.com/VYq7sVq/sports-at-school.webp';
    const navigate = useNavigate();
    const [showCards, setShowCards] = useState([]);
    const [loadingEqp, setLoadingEqp] = useState(true);

    const { user, serverURL } = useContext(GlobalContext);

    const filterCards = async () => {
        const res = await fetch(`${serverURL}/get-all-equipment`);
        const data = await res.json();
        setShowCards(data.filter(d => d.userEmail === user.email));
        setLoadingEqp(false);
    }

    useEffect(() => {
        filterCards();
    }, []);

    if (loadingEqp) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
                {
                    showCards.map(eqp => {
                        return (
                            <div key={eqp._id} className="card card-compact bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        className="w-full h-[300px]"
                                        src={eqp.imageUrl || defaultImage}
                                        alt=""
                                        onError={(e) => {
                                            e.target.src = defaultImage;
                                        }}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{eqp.itemName}</h2>
                                    <p className="text-right">Items left: {eqp.quantity}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-3xl">${eqp.price}</p>
                                        <div className="badge badge-outline">{eqp.category}</div>
                                    </div>
                                    <div className="card-actions justify-between">
                                        <button onClick={() => navigate(`/details/${eqp._id}`)} className="btn btn-primary">Details</button>
                                        <button onClick={() => navigate(`/details/${eqp._id}`)} className="btn btn-info">Edit</button>
                                        <button onClick={() => navigate(`/details/${eqp._id}`)} className="btn btn-error">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default MyEquipmentPage;