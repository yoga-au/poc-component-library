import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button
      className={`btn bg-ifp-yellow-02 ${className ? className : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
