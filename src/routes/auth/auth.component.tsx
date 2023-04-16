import "./auth.styles.scss";
import Logo from "../../components/logo/logo.compoent";
import AuthInput from "../../components/auth-input/auth-input.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (user) navigate("home");
  }, [user, navigate]);
  return (
    <div className="auth-container">
      <div className="auth-header-container">
        <div className="auth-logo-cantainer">
          <Logo />
        </div>
        <div className="auth-title-container">
          <h2 className="auth-title">Admin page</h2>
        </div>
      </div>
      <AuthInput />
    </div>
  );
};

export default Auth;
