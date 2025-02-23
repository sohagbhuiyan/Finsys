import { android, apple } from "../Utils/images";
import Download from "./Download";

const DownloadSection = () => {
  return (

    <div className="flex gap-8 justify-center items-center bg-gray-100 p-10 md:p-4 py-8">
      <Download
        image={android}
        heading="Download FINSYS from Play Store"  />
      <Download
        image={apple}
        heading="Download FINSYS from App Store"
      />
       </div>
  );
};

export default DownloadSection;