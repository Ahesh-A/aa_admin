import "./logo.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Aalogo } from "../../static-files/logo/a&a apprales.svg";
import { GoPrimitiveDot } from "react-icons/go";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="logo-container">
          <Aalogo className="logostyles" />
          <GoPrimitiveDot className="dot-style" />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
