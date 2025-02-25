import CardsSection from "../components/CardSection";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
    return (
      <>
       <Header />
       <Nav />
       <CardsSection />
       <DownloadSection />
       <Footer />
       
      </>
    );
  };
  
  export default Home;
  //bg-gradient-to-r from-[#06426d] to-[#2575fc]; make it static bg color code :[#06426d]