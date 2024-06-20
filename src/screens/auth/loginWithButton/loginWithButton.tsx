import React from "react";
import './loginWithButton.scss'

type LoginWithButtonProps = {
  loginWith: "Google" | "Facebook";
  onClick: () => void;
  icon: string;
};

const LoginWithButton: React.FC<LoginWithButtonProps> = ({
  loginWith,
  onClick,
  icon,
}) => {
  return (
    <div className="login-with-button" onClick={onClick}>
      <div className="icon-wrapper">
        <img className="platform-icon" src={icon} alt={loginWith} />
      </div>
      <div className="text">{`Login with ${loginWith}`}</div>
    </div>
  );
};
export default LoginWithButton;
