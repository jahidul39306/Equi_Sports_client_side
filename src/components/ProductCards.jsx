/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const ProductCards = ({ allEquipments }) => {

    const defaultImage = 'https://i.ibb.co.com/VYq7sVq/sports-at-school.webp';
    const navigate = useNavigate();

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            {
                allEquipments.map(eqp => {
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
                                <div className="card-actions justify-end">
                                    <button onClick={() => navigate(`/details/${eqp._id}`)} className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ProductCards;