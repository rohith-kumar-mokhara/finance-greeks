import React from "react";
import "./labeledButton.scss";

type LabeledButtonProps = {
  label: string;
  onClick: () => void;
  edges?: "round" | "sharp";
  category?: "primary" | "secondary" | "warning";
  disabled?: boolean;
};

const LabeledButton: React.FC<LabeledButtonProps> = ({
  label,
  onClick,
  edges,
  category,
  disabled
}) => {
  return (
    <div className={`labeled-button ${category} ${edges} ${disabled ? "disabled" : ""}`} onClick={disabled ? ()=>{} : onClick}>
      {label}
    </div>
  );
};
export default LabeledButton;
