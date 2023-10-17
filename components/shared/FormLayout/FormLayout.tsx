import { cn } from "@/utils/tailwindUtils";
import React, { FunctionComponent } from "react";

interface FormLayoutProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const FormLayout: FunctionComponent<FormLayoutProps> = ({
  className,
  ...props
}) => {
  return (
    <form
      className={cn("flex flex-col gap-4 justify-start", className)}
      {...props}
    />
  );
};

export default FormLayout;
