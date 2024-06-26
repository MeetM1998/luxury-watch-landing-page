import dotImage from "../../assets/images/three-dots.svg";
import "./style.scss";

const CardContainer = () => {
  return (
    <>
      <img src={dotImage} alt="three-dot" className="three-dot" />
      <div className="container">
        <div className="card">
          <h2>01</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus
          </p>
        </div>
        <div className="card">
          <h2>02</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus
          </p>
        </div>
        <div className="card">
          <h2>03</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus
          </p>
        </div>
      </div>
    </>
  );
};
export default CardContainer;
