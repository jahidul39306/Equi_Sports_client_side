import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";

const MemberCard = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly gap-5">
            <div className="bg-pink-300 text-left rounded-lg p-5 md:p-10 font-bold flex flex-col gap-2 md:gap-5 text-base md:text-lg shadow-xl">
                <p className="text-center text-xl md:text-3xl">Premium member</p>
                <h1 className="text-2xl md:text-5xl text-center">$5/month</h1>
                <hr />
                <div className="space-y-3">
                    <p className="flex gap-2 items-center"><ImCheckmark />Receieve special discount</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Early access to sales</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Earn points on every purchase</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Early access to new products</p>
                    <p className="flex gap-2 items-center"><ImCross />Free shiping</p>
                    <p className="flex gap-2 items-center"><ImCross />Product customization</p>
                    <p className="flex gap-2 items-center"><ImCross />Return warrenty</p>
                    <p className="flex gap-2 items-center"><ImCross />Special gifts on birthday</p>
                    <p className="flex gap-2 items-center"><ImCross />Dedicated customer support</p>
                </div>
                <button className="btn w-full">Buy now</button>
            </div>
            <div className="bg-pink-300 text-left rounded-lg p-5 md:p-10 font-bold flex flex-col gap-2 md:gap-5 text-base md:text-lg shadow-xl">
                <p className="text-center text-xl md:text-3xl text-blue-600">Platinum member</p>
                <h1 className="text-2xl md:text-5xl text-center">$100/year</h1>
                <hr />
                <div className="space-y-3">
                <p className="flex gap-2 items-center"><ImCheckmark />Receieve special discount</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Early access to sales</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Earn points on every purchase</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Early access to new products</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Free shiping</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Product customization</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Return warrenty</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Special gifts on birthday</p>
                    <p className="flex gap-2 items-center"><ImCheckmark />Dedicated customer support</p>
                </div>
                <button className="btn w-full">Buy now</button>
            </div>
        </div>
    );
};

export default MemberCard;