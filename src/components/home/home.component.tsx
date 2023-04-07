import "./home.styles.scss";
import Logo from "../logo/logo.compoent";
import { getData } from "../../utils/firebase.utils";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const data = getData();
    console.log(data);
  });
  return (
    <div className="home-container">
      <div className="home-header-container">
        <div className="home-logo-cantainer">
          <Logo />
        </div>
        <div className="home-options-container">
          <span className="option">view products</span>
          <span className="option">view users</span>
          <span className="option">add products</span>
          <span className="option">delete product</span>
          <span className="option">products to deliver</span>
          <span className="option">update product</span>
        </div>
      </div>
      <div className="home-body-container"></div>
    </div>
  );
};

export default Home;
