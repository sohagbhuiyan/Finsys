import { fyblu } from "../Utils/images";
import Card from "./Card";

const CardsSection = () => {
  return (
    <div className="px-6 py-6 bg-gray-100">
 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
        <Card
          image={fyblu}
          title="Instant Loan"
          heading="Instant Loan, Daily Profits"
          description="Get instant loans and start earning daily. Our fast, flexible, and reliable system ensures you can grow your income effortlessly."
        />
        <Card
          image={fyblu}
          title="Earn Up to 10%"
          heading="Earn Up to 10%"
          description="Join FINSYS, share with friends, and earn up to 10% rewards. Start earning today and unlock unlimited earning potential!"
        />
   
      </div>
      <Card
          image={fyblu}
          title="Small Deposit, Big Returns"
          heading="Small Deposit, Big Returns"
          description="Start small, earn big. Grow your money with minimal investment and enjoy hassle-free daily profits. Your financial growth starts here!"
        />
      {/* <div className="flex justify-center mt-8 bg-gray-100">
        <button className="bg-blue-900 text-white text-center px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Get the App
        </button>
      </div> */}
    </div>
  );
};

export default CardsSection;
