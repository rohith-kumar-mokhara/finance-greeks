import React, { useEffect, useState } from "react";
import "./auth.scss";
import usePageTitle from "../../hooks/usePageTitle";
import ValidateEmail from "../../ui-elements/regexExpressions/emailValidation";
import showEye from '../../assets/icons/eye.svg'
import hidden from '../../assets/icons/hidden.svg'
import InputFields from "../../ui-elements/inputFields/labeledInputs/inputFields";
import LabeledButton from "../../ui-elements/buttons/labeledButton/labeledButton";
import { Link } from "react-router-dom";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  usePageTitle("Sign Up");

  const [name, setName] = useState<string>();
  const [nameError, setNameError] = useState<boolean>();
  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>();
  const [pass, setPass] = useState<string>();
  const [passError, setPassError] = useState<boolean>();
  const [confirmPass, setConfirmPass] = useState<string>();
  const [confirmPassError, setConfirmPassError] = useState<boolean>();
  const [passSuffixIcon, setPassSuffixIcon] = useState<string>(showEye);
  const [confirmPassSuffixIcon, setConfirmPassSuffixIcon] = useState<string>(showEye);

  const onSignUp = async () => {
    if (name === "" || name === null || name === undefined){
        setNameError(true)
    }else  if (
        email === "" ||
        email === null ||
        email === undefined ||
        !ValidateEmail(email)
      ) {
        setEmailError(true);
        return;
      } else if (pass === "" || pass === null || pass === undefined) {
        setPassError(true);
        return;
      } else if (confirmPass === "" || confirmPass === null || confirmPass === undefined) {
        setConfirmPassError(true);
        return;
      } else {
        try {
         
          console.log("All set to go")
        } catch (error) {
          console.error(error);
        }
      }
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSignUp();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setNameError(false)
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    setPassError(false);
  };

  const onConfirmPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(e.target.value)
    setConfirmPassError(false)
  }

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

  const onShowConfirmPassword = () => {
    var passInput = document.getElementById("confirmPassword") as HTMLInputElement;
    if (passInput.type === "password") {
      passInput.type = "text";
      setConfirmPassSuffixIcon(hidden);
    } else {
      passInput.type = "password";
      setConfirmPassSuffixIcon(showEye);
    }
  };

  return (
    <div className="auth-page">
      <div className="page-title">Register in Finance Greeks</div>

      <div className="auth-box">

      <div className="input-wrapper">
          <InputFields
            label="Name"
            placeholder="Enter your name here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onNameChange(e)
            }
            required
            error={nameError}
            errorMsg="Please enter your name"
            theme="dark"
            edges="round"
          />
        </div>

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
            error={passError}
            errorMsg="Please enter the password"
            onSuffixClick={onShowPassword}
            suffixIcon={passSuffixIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <div className="input-wrapper">
          <InputFields
            label="Confirm Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onConfirmPassChange(e)
            }
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            error={confirmPassError}
            errorMsg="Please confirm the password"
            onSuffixClick={onShowConfirmPassword}
            suffixIcon={confirmPassSuffixIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <LabeledButton label="Sign Up" onClick={onSignUp} edges="round" />

        <div className="alternate-text">
          <span>Already have an account ?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
