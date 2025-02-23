import { fyblu } from "../Utils/images";
import Card from "./Card";

const CardsSection = () => {
  return (
    <>
    <div className="items-center px-6 p-8 bg-gray-100 ">
    <div className="flex gap-4 justify-center items-center  py-8">
      <Card
        image={fyblu}
        title="Instant Loan3232"
        heading="Instant Loan, Daily Profits"
        description="Get instant loans and start earning daily. Our fast, flexible, and reliable system ensures you can grow your income effortlessly."
      />
      <Card
        image={fyblu}
        title="Earn Up to 13230%"
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
    </div>
    <div className="flex justify-center bg-gray-100">
    <h1 className="bg-blue-900 text-white text-center px-6 py-2 rounded-md">
      Get the App
    </h1>
  </div>    </>
  );
};

export default CardsSection;
