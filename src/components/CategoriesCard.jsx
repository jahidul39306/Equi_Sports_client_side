/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";


const CategoriesCard = ({ allEquipments }) => {
    const [selectedCategory, setSelectedCategory] = useState('Football');
    const defaultImage = 'https://i.ibb.co.com/VYq7sVq/sports-at-school.webp';
    const navigate = useNavigate();

    const filteredCategory = (value) => {
        return allEquipments.filter(eqp => eqp.category === value);
    }

    const handleCategory = (value) => {
        setSelectedCategory(value);
        setShowCards(filteredCategory(value));
    }

    const [showCards, setShowCards] = useState(filteredCategory('Football'));


    return (
        <Slide>
            <div>
                <div className="container mx-auto flex justify-evenly flex-wrap">
                    <button onClick={() => handleCategory('Football')} className={`btn btn-success  ${selectedCategory === 'Football' ? 'bg-green-500' : 'bg-green-200'}`}>Football</button>
                    <button onClick={() => handleCategory('Cricket')} className={`btn btn-success 0 ${selectedCategory === 'Cricket' ? 'bg-green-500' : 'bg-green-200'}`}>Cricket</button>
                    <button onClick={() => handleCategory('Baseball')} className={`btn btn-success  ${selectedCategory === 'Baseball' ? 'bg-green-500' : 'bg-green-200'}`}>Baseball</button>
                    <button onClick={() => handleCategory('Tennis')} className={`btn btn-success  ${selectedCategory === 'Tennis' ? 'bg-green-500' : 'bg-green-200'}`}>Tennis</button>
                </div>

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
                                        <div className="card-actions justify-end">
                                            <button onClick={() => navigate(`/details/${eqp._id}`)} className="btn btn-primary">Details</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Slide>

    );
};

export default CategoriesCard;