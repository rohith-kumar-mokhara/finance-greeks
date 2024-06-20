import React, { useEffect, useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import { useNavigate } from "react-router-dom";
import InputFields from "../../ui-elements/inputFields/labeledInputs/inputFields";
import LabeledButton from "../../ui-elements/buttons/labeledButton/labeledButton";

type OtpProps = {};

const Otp: React.FC<OtpProps> = () => {
  usePageTitle("OTP");
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string>();
  const [otpError, setOtpError] = useState<boolean>();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // onSignUp();
        console.log("Submit");
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const onOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    setOtpError(false);
  };

  return (
    <div className="auth-page">
      <div className="page-title">OTP Page</div>
      <div className="auth-box">
        <div className="input-wrapper">
          <InputFields
            label="OTP"
            placeholder="Enter your otp here"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onOtpChange(e)
            }
            required
            type={"number"}
            error={otpError}
            errorMsg="Please enter the otp"
            theme="dark"
            edges="round"
          />
        </div>

        <div className="forgot-text" onClick={()=>{console.log("Write the send otp page here")}}>Resend OTP</div>

        <LabeledButton label="Submit OTP" onClick={()=>(console.log("Submit"))} edges="round" />
      </div>
    </div>
  );
};
export default Otp;
