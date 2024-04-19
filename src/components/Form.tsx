import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Form = ({ children }: Props) => {
  return (
    <form>
      <fieldset className="container d-flex flex-column">{children}</fieldset>
    </form>
  );
};

export default Form;
