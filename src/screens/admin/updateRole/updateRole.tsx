import React, { useState } from "react";
import './updateRole.scss'
import InputFields from "../../../ui-elements/inputFields/labeledInputs/inputFields";
import LabeledButton from "../../../ui-elements/buttons/labeledButton/labeledButton";

type UpdateRoleProps = {};

const UpdateRole: React.FC<UpdateRoleProps> = () => {
  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState<boolean>();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const onDowngrade = () => {
    console.log(email, "downgraded to user" )
  }

  const onUpgrade = () => {
    console.log(email, "upgrade to admin role")
  }

  return (
    <div className="update-role">
      <div className="box">
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

        <div className="buttons">
            <LabeledButton label="DownGrade to normal user" onClick={onDowngrade} edges="round" category="warning"/>
            <LabeledButton label="Upgrade to admin role" onClick={onUpgrade} edges="round"/>
        </div>
      </div>
    </div>
  );
};
export default UpdateRole;
