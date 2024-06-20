import React from 'react';
import './blankInput.scss';

type BlankInputProps = {
  placeholder: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  edges?: "sharp" | "round"
  type?: string
};

const BlankInput: React.FC<BlankInputProps> = ({ placeholder, required, edges, type}) => {
  return (
    <div className= {`blank-input-container ${edges} ${type}`}>
      <input className='input' placeholder={placeholder} type={type}/>
    </div>
  );
};

export default BlankInput;
