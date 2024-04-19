import React, { useState, MouseEvent } from "react";

interface Props {
  label: string;
  type?: "email" | "password" | "text";
  placeholder?: string;
}

export const FormInput = ({ label, type = "text", placeholder }: Props) => {
  const [passVisible, setPassVisibility] = useState(false);
  const [passSlashed, setPassSlashed] = useState("");
  const [passType, setPassType] = useState(type);

  function handleOnClick(e: MouseEvent) {
    e.preventDefault();
    setPassVisibility(!passVisible);

    if (passVisible) {
      setPassSlashed("-slash");
      setPassType("text");
    } else {
      setPassSlashed("");
      setPassType("password");
    }
  }

  return (
    <>
      <label htmlFor={label} className="form-label mt-4">
        {label}
      </label>
      <div className="input-group">
        <input
          type={passType}
          id={label}
          className="form-control"
          placeholder={placeholder}
        />
        {type === "password" && (
          <button className="btn btn-outline-primary" onClick={handleOnClick}>
            <i className={"fa-solid fa-eye" + passSlashed}></i>
          </button>
        )}
      </div>
    </>
  );
};

export default FormInput;
