import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../provider/AuthProvider";

const AllEquipmentPage = () => {
    const { serverURL } = useContext(GlobalContext);
    const [defaultEquipments, setDefaultEquipments] = useState([]);


    const getAllEquipments = async () => {
        const res = await fetch(`${serverURL}/get-all-equipment`);
        const data = await res.json();
        setDefaultEquipments(data);
    }

    useEffect(() => {
        getAllEquipments();
    }, [])

    return (
        <div className="overflow-x-auto max-w-3xl mx-auto mt-10">
            <table className="table table-zebra">
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
                        defaultEquipments.map((eq, idx) => {
                            return (
                                <tr key={eq._id}>
                                    <th>{idx + 1}</th>
                                    <td>{eq.itemName}</td>
                                    <td>{eq.category}</td>
                                    <td>{eq.price}</td>
                                    <td>{eq.quantity}</td>
                                    <td>{eq.processingTime} day</td>
                                    <td>
                                        <button className="btn btn-primary">Details</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllEquipmentPage;