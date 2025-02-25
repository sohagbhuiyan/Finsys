import { android, apple } from "../Utils/images";
import Download from "./Download";

const DownloadSection = () => {
  return (
    <div className="bg-gray-100 -mt-6 p-6 md:p-10 text-center">   
      <h1 className="text-xl md:text-3xl font-bold text-blue-900 mb-6">
        Get the App
      </h1>
      <div className="flex md:gap-6 gap-3 text-xs md:text-lg max-w-lg mx-auto">
        <Download image={android} heading="Download from Play Store" />
        <Download image={apple} heading="Download from App Store" />
      </div>
    </div>
  );
};

export default DownloadSection;
