import Commonlayout from "../../layout/commonlayout";
import CardContainer from "../CardContainer";
import Footer from "../Footer/Footer";
import Header from "../Header";
import ImageGallery from "../ImageGallery";
import LuxuryWatch from "../LuxaryWatch";
import Timepiece from "../Timepiece";
import WatchDisplay from "../WatchDisplay";

const Home = () => {
  return (
    <div>
      <Header />
      <LuxuryWatch />
      <Commonlayout>
        <CardContainer />
        <Timepiece />
        <WatchDisplay />
        <ImageGallery />
        <Footer />
      </Commonlayout>
    </div>
  );
};
export default Home;
