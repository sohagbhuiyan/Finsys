import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SavingsPage from "../components/savings/SavingsPage";

const Savings = () => {

    return (
      <>
        <Header />
        <Nav />
        <SavingsPage/>
        <DownloadSection />
        <Footer />
      </>
    );
  };
  
  export default Savings;
  