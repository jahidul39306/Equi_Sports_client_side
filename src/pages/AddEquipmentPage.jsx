import { useContext } from "react";
import { GlobalContext } from "../provider/AuthProvider";

const AddEquipmentPage = () => {

    const {user} = useContext(GlobalContext);


    return (
        <div className="flex justify-center items-center min-h-screen">
            <form className="card-body max-w-3xl grid grid-cols-2 bg-green-100 rounded-xl shadow-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL (optional)</span>
                    </label>
                    <input type="text" placeholder="Image URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Item name</span>
                    </label>
                    <input type="text" placeholder="Item name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category name</span>
                    </label>
                    <input type="text" placeholder="Cateory name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="Price" className="input input-bordered" required min='0'/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating (optional)</span>
                    </label>
                    <input type="number" placeholder="Rating" className="input input-bordered"  min='0' max="5"/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Customization (optional)</span>
                    </label>
                    <input type="text" placeholder="Customization" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Processing time (in days)</span>
                    </label>
                    <input type="number" placeholder="Processing time" className="input input-bordered" required min='0'/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="number" placeholder="Available quantity" className="input input-bordered" required min='0'/>
                </div>

                <div className="col-span-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-primary w-full resize-none textarea-lg" placeholder="Description"></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered" readOnly defaultValue={user.email} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="input input-bordered" readOnly defaultValue={user.displayName} />
                </div>

                <div className="form-control mt-6 col-span-2">
                    <button className="btn bg-green-500">Add equipment</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipmentPage;