import React, { useEffect, useState } from "react";
import "./auth.scss";
import usePageTitle from "../../hooks/usePageTitle";
import InputFields from "../../ui-elements/inputFields/labeledInputs/inputFields";
import showEye from "../../assets/icons/eye.svg";
import hidden from "../../assets/icons/hidden.svg";
import passwordIcon from "../../assets/icons/Password.svg";
import usernameIcon from "../../assets/icons/username.svg";
import LabeledButton from "../../ui-elements/buttons/labeledButton/labeledButton";
import LoginWithButton from "./loginWithButton/loginWithButton";
import google from "../../assets/icons/google.svg";
import coloredFacebook from "../../assets/icons/coloredFacebook.svg";
import { Link } from "react-router-dom";
import ValidateEmail from "../../ui-elements/regexExpressions/emailValidation";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  usePageTitle("Login");

  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>();
  const [password, setPassword] = useState<string>();
  const [passwordError, setPasswordError] = useState<boolean>();
  const [passSuffixIcon, setPassSuffixIcon] = useState<string>(showEye);

  const onLogin = async () => {
    if (
      email === "" ||
      email === null ||
      email === undefined ||
      !ValidateEmail(email)
    ) {
      setTimeout(() => {
        setEmailError(true);
      }, 800);
    } else if (password === "" || password === null || password === undefined) {
      setTimeout(() => {
        setPasswordError(true);
      }, 800);
    } else {
      try {
        // await loginUser({
        //   variables: {
        //     data: {
        //       email,
        //       password: pass,
        //     },
        //   },
        // });
        console.log("Password: ", password, " and Email: ", email);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onLogin();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };

  const onShowPassword = () => {
    var passInput = document.getElementById("password") as HTMLInputElement;
    if (passInput.type === "password") {
      passInput.type = "text";
      setPassSuffixIcon(hidden);
    } else {
      passInput.type = "password";
      setPassSuffixIcon(showEye);
    }
  };

  return (
    <div className="auth-page">
      <div className="page-title">Login to Finance Greeks</div>

      <div className="auth-box">
        <div className="input-wrapper">
          <InputFields
            label="Email"
            placeholder="Enter your email address here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onEmailChange(e)
            }
            required
            error={emailError}
            errorMsg="Please enter a valid email address"
            prefixIcon={usernameIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <div className="input-wrapper">
          <InputFields
            label="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPassChange(e)
            }
            id="password"
            type="password"
            placeholder="Enter your password here"
            required
            error={passwordError}
            errorMsg="Please enter the password"
            onSuffixClick={onShowPassword}
            prefixIcon={passwordIcon}
            suffixIcon={passSuffixIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <Link className="forgot-text" to={"/forgotPass"}>Forgot Password ?</Link>

        <LabeledButton label="Login" onClick={onLogin} edges="round" />

        <LoginWithButton 
          loginWith="Google" 
          icon={google} 
          onClick={() => {}} 
        />

        <LoginWithButton
          loginWith="Facebook"
          icon={coloredFacebook}
          onClick={() => {}}
        />

        <div className="alternate-text">
          <span>New here?</span>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
