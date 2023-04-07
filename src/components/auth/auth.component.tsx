import "./auth.styles.scss";
import Logo from "../logo/logo.compoent";
import AuthInput from "../auth-input/auth-input.component";
const Auth = () => {
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
