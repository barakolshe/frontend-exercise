import { cn } from "@/utils/tailwindUtils";
import { FunctionComponent } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
