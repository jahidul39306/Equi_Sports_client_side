import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GlobalContext } from "../provider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const UpdateEquipmentPage = () => {
    const { serverURL } = useContext(GlobalContext);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    // get the data
    const params = useParams();
    const id = params.id;
    const [loadingEqp, setLoadingEqp] = useState(true);
    const [equipment, setEquipment] = useState();

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const imageUrl = form.imageUrl.value;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        if (category === 'None') {
            toast.error('Please, select a category.');
            setErr('Please, select a category.');
            return
        }

        if (Number(rating) > 5) {
            toast.error('Rating can not be greater than 5');
            setErr('Rating can not be greater than 5');
            return
        }

        const equipment = {
            imageUrl, itemName, category, price, rating, customization, processingTime, quantity, description, userEmail, userName
        }

        try {
            const requestOption = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(equipment),
            }

            const response = await fetch(`${serverURL}/update-equipment/${id}`, requestOption);
            if (response.ok) {
                toast.success("Equipment updated successfully");
                setErr('');
                navigate('/my-equipment');
            }
        }
        catch (err) {
            toast.error(err.message);
            setErr(err.message);
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="card-body max-w-3xl grid grid-cols-1 md:grid-cols-2 bg-green-100 rounded-xl shadow-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL (optional)</span>
                    </label>
                    <input name="imageUrl" type="text" placeholder="Image URL" className="input input-bordered" defaultValue={equipment.imageUrl}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item name</span>
                    </label>
                    <input name="itemName" type="text" placeholder="Item name" className="input input-bordered" required defaultValue={equipment.itemName}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name="category" className="select select-info w-full border-none" defaultValue={equipment.category}>
                        <option value='None'>Select category</option>
                        <option value='Football'>Football</option>
                        <option value='Cricket'>Cricket</option>
                        <option value='Tennis'>Tennis</option>
                        <option value='Baseball'>Baseball</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name="price" type="number" placeholder="Price" className="input input-bordered" required min='0' step="0.01" defaultValue={equipment.price}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating (optional)</span>
                    </label>
                    <input name="rating" type="number" placeholder="Rating" className="input input-bordered" min='0' max="5" step="0.01" defaultValue={equipment.rating}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customization (optional)</span>
                    </label>
                    <input name="customization" type="text" placeholder="Customization" className="input input-bordered" defaultValue={equipment.customization}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing time (in days)</span>
                    </label>
                    <input name="processingTime" type="number" placeholder="Processing time" className="input input-bordered" required min='0' defaultValue={equipment.processingTime}/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input name="quantity" type="number" placeholder="Available quantity" className="input input-bordered" required min='0' defaultValue={equipment.quantity}/>
                </div>

                <div className="md:col-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-primary w-full resize-none textarea-lg" placeholder="Description" defaultValue={equipment.description}></textarea>
                </div>

                {/* error */}
                {
                    err && <p className="text-lg text-red-500 p-2 md:col-span-2">{err}</p>
                }

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="userEmail" type="email" placeholder="Email" className="input input-bordered" readOnly defaultValue={equipment.userEmail} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input name="userName" type="text" placeholder="Username" className="input input-bordered" readOnly defaultValue={equipment.userName} />
                </div>

                <div className="form-control mt-6 md:col-span-2">
                    <button className="btn bg-green-500">Update equipment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEquipmentPage;