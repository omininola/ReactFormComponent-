import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Submit = ({ children }: Props) => {
  return (
    <button type="submit" className="btn btn-primary mt-4">
      {children}
    </button>
  );
};

export default Submit;
