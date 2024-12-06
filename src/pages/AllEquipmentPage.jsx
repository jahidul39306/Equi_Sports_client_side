import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const AllEquipmentPage = () => {
    const { serverURL } = useContext(GlobalContext);
    const [defaultEquipments, setDefaultEquipments] = useState([]);
    const [allEquipments, setAllEquipments] = useState([]);
    const [loadingEqp, setLoadingEqp] = useState(true);
    const [sortByPrice, setSortByPrice] = useState(false);
    const navigate = useNavigate();

    const getAllEquipments = async () => {
        const res = await fetch(`${serverURL}/get-all-equipment`);
        const data = await res.json();
        setDefaultEquipments(data);
        setAllEquipments([...data]);
        setLoadingEqp(false);
    }

    useEffect(() => {
        getAllEquipments();
    }, []);

    const handleSort = () => {
        if (!sortByPrice) {
            setAllEquipments(allEquipments.sort((a, b) => a.price - b.price));
            setSortByPrice(!sortByPrice);
        }
        else {
            setAllEquipments([...defaultEquipments]);
            setSortByPrice(!sortByPrice);
        }
    }

    if (loadingEqp) {
        return <Loading></Loading>
    }

    return (
        <div className="mt-10 container mx-auto text-center space-y-5">
            <button onClick={handleSort} className="btn btn-primary">{sortByPrice ? "Sort by default" : "Sort by price"}</button>
            <div className="overflow-x-auto">
                <table className="table table-zebra max-w-sm lg:max-w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#No.</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available quantity</th>
                            <th>Processing time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEquipments.map((eq, idx) => {
                                return (
                                    <tr key={eq._id}>
                                        <th>{idx + 1}</th>
                                        <td>{eq.itemName}</td>
                                        <td>{eq.category}</td>
                                        <td>{eq.price}</td>
                                        <td>{eq.quantity}</td>
                                        <td>{eq.processingTime} day</td>
                                        <td>
                                            <button onClick={() => navigate(`/details/${eq._id}`)} className="btn btn-primary">Details</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipmentPage;