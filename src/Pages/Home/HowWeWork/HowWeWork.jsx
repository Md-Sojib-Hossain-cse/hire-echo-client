import { BsBuildingFillCheck } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbBasketSearch } from "react-icons/tb";

const HowWeWork = () => {
    return (
        <div className="mt-10 md:mt-12 lg:mt-16 text-center min-h-48">
            <p className="text-sm text-blue-500 font-medium text-center mb-3">Working Process</p>
            <h3 className="text-3xl md:text-4xl font-medium text-center pb-6 md:pb-8 lg:pb-12">How HireEcho Works For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 md:p-6 lg:p-8 border flex justify-center items-center gap-4 flex-col rounded-tr-3xl rounded-bl-3xl w-full md:-translate-y-3 hover:bg-blue-400 hover:text-white transition delay-75 duration-300 hover:-translate-y-6">
                    <TbBasketSearch className="text-3xl" />
                    <p className="text-xl font-medium">Find The Right Job</p>
                </div>
                <div className="p-4 md:p-6 lg:p-8 border flex justify-center items-center gap-4 flex-col rounded-tr-3xl rounded-bl-3xl w-full md:translate-y-3 hover:bg-blue-400 hover:text-white transition delay-75 duration-300 hover:translate-y-0">
                    <BsBuildingFillCheck className="text-3xl" />
                    <p className="text-xl font-medium">Research Companies</p>
                </div>
                <div className="p-4 md:p-6 lg:p-8 border flex justify-center items-center gap-4 flex-col rounded-tr-3xl rounded-bl-3xl w-full md:-translate-y-3 hover:bg-blue-400 hover:text-white transition delay-75 duration-300 hover:-translate-y-6">
                    <GiTakeMyMoney className="text-3xl" />
                    <p className="text-xl font-medium">Compare Salary</p>
                </div>
                <div className="p-4 md:p-6 lg:p-8 border flex justify-center items-center gap-4 flex-col rounded-tr-3xl rounded-bl-3xl w-full md:translate-y-3 hover:bg-blue-400 hover:text-white transition delay-75 duration-300 hover:translate-y-0">
                    <FcDocument className="text-3xl" />
                    <p className="text-xl font-medium">Quick Apply</p>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;