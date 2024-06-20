import React, { useEffect, useState } from "react";
import "./auth.scss";
import InputFields from "../../ui-elements/inputFields/labeledInputs/inputFields";
import showEye from "../../assets/icons/eye.svg";
import hidden from "../../assets/icons/hidden.svg";
import { Link, useNavigate } from "react-router-dom";
import LabeledButton from "../../ui-elements/buttons/labeledButton/labeledButton";
import usePageTitle from "../../hooks/usePageTitle";

type ForgotPassProps = {};

const ForgotPass: React.FC<ForgotPassProps> = () => {
  usePageTitle("Forgot Password");
  const navigate = useNavigate()

  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>();

  const [pass, setPass] = useState<string>();
  const [passError, setPassError] = useState<boolean>();

  const [confirmPass, setConfirmPass] = useState<string>();
  const [confirmPassError, setConfirmPassError] = useState<boolean>();

  const [passSuffixIcon, setPassSuffixIcon] = useState<string>();
  const [confirmPassSuffixIcon, setConfirmPassSuffixIcon] = useState<string>();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // onSignUp();
        console.log("Submit")
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
    setPass(e.target.value);
    setPassError(false);
  };

  const onConfirmPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(e.target.value);
    setConfirmPassError(false);
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

  const onShowConfirmPassword = () => {
    var passInput = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
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
      <div className="page-title">Create a New Password</div>

      <div className="auth-box">
        <div className="input-wrapper">
          <InputFields
            label="Email (You will get a otp on the same email)"
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
            label="New Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPassChange(e)
            }
            id="password"
            type="password"
            placeholder="Enter your new password here"
            required
            error={passError}
            errorMsg="Please enter the new password"
            onSuffixClick={onShowPassword}
            suffixIcon={passSuffixIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <div className="input-wrapper">
          <InputFields
            label="Confirm New Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onConfirmPassChange(e)
            }
            id="confirmPassword"
            type="password"
            placeholder="Confirm your new password here"
            required
            error={confirmPassError}
            errorMsg="Please confirm the new password"
            onSuffixClick={onShowConfirmPassword}
            suffixIcon={confirmPassSuffixIcon}
            theme="dark"
            edges="round"
          />
        </div>

        <LabeledButton
          label="Send OTP"
          onClick={() => {
            navigate("/otp");
          }}
          edges="round"
        />

        <div className="alternate-text">
          <span>Back to </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
