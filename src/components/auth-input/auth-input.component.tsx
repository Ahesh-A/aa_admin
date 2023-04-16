import { ChangeEvent, FormEvent } from "react";
import "./auth-input.styles.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Admin } from "../../models/admin.model";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../../store/user/user.action";
const AuthInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = {
    name: "",
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(initialValue);
  const { name, email, password } = formFields;
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(name, password, email);
    const admin =  Admin.getInstance();
    
    if (admin.isAdmin(name, email, password)) {
      dispatch(signInSuccess(admin));
      navigate("home");
    } else {
      alert("invalid username or email or password...");
    }
    setFormFields({ name: "", password: "", email: "" });
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="auth-input-container">
      <div className="input-card">
        <form
          action="submit"
          className="input-card-form"
          onSubmit={submitHandler}
        >
          <div className="auth-input-label-container">
            <label htmlFor="user-name" className="auth-input-label">
              Username:
            </label>
            <input
              type="text"
              name="name"
              id="user-name"
              className="auth-input"
              value={name}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="auth-input-label-container">
            <label htmlFor="user-name" className="auth-input-label">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="auth-input"
              onChange={changeHandler}
              value={email}
              required
            />
          </div>
          <div className="auth-input-label-container">
            <label htmlFor="user-name" className="auth-input-label">
              Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="auth-input"
              onChange={changeHandler}
              value={password}
              required
            />
          </div>
          <button type="submit" className="auth-input-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthInput;
