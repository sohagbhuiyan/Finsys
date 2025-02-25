import AboutFinsys from "../components/about/AboutFinsys";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const About = () => {
    return (
    <>
      <Header />
      <Nav />
      <AboutFinsys/>
      <DownloadSection />
      <div className="flex-col-1 md:flex justify-between items-center border-t-1 p-5 px-10">
        <h2 className="text-lg md:text-xl text-gray-400 font-semibold">FINSYS</h2>
        <h2 className="text-md text-gray-400 font-medium">Hotline: +914584543</h2>
        <h2 className="text-md text-gray-400 font-medium">Email: support@finsys.com</h2>
        <h2 className="text-md text-gray-400 font-medium">Address: Johannesburg, South Africa. </h2>

    </div>
    <Footer />
    </>
    );
  };
  
  export default About;
  