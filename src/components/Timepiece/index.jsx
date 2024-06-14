import CurvImage1 from "../../assets/images/curv-1.svg";
import CurvImage2 from "../../assets/images/curv-2.svg";
import "./style.scss";

const Timepiece = () => {
  return (
    <div>
      <div className="timepiece-banner">
        <div className="content">
          <h1>Elegant Timepieces Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolor
          </p>
          <button className="explore-button">Explore</button>
        </div>
        <div className="images">
          <img src={CurvImage1} alt="Watch 1" className="curv1" />
          <img src={CurvImage2} alt="Watch 2" className="curv2" />
        </div>
      </div>
    </div>
  );
};

export default Timepiece;
