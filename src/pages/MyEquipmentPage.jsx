import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Swal from 'sweetalert2';
import { toast } from "react-toastify";

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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const requestOption = {
                        method: "DELETE",
                    }
                    const response = await fetch(`${serverURL}/delete-equipment/${id}`, requestOption);
                    if (response.ok) {
                        setLoadingEqp(true);
                        toast.success("Equipment deleted successfully");
                        setShowCards(showCards.filter(c => c._id !== id));
                        setLoadingEqp(false);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your equipment has been deleted.",
                            icon: "success"
                        });
                    }
                }
                catch (err) {
                    toast.error(err.message);
                }
            }
        });
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
                                        <button onClick={() => navigate(`/update-equipment/${eqp._id}`)} className="btn btn-info">Edit</button>
                                        <button onClick={() => handleDelete(eqp._id)} className="btn btn-error">Delete</button>
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