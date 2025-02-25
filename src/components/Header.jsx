import { fybwh } from "../Utils/images";

const Header = () =>{

    return (
    <>
    <div className="bg-[#06426d] text-white text-center px-5 py-8 m-0"> 
    <div className="flex justify-center items-center">
    <img src={fybwh} alt="finsys" className="h-10"/>
    <h1 className="text-2xl md:text-4xl font-bold">FINSYS
    </h1>
    </div>
    <p className="text-md sm:text-xl mt-3">Earn 1% daily revenue and withdraw your profits anytime. Start growing your income today!</p>
    </div>
    </>
    )
  };
  export default Header;
