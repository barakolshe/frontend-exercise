import { TextField } from "@/components/ui/TextField/TextField";
import { FormEventHandler, FunctionComponent, ReactNode } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../ModalPages";

interface NameFormProps {
  onSubmit: FormEventHandler;
  register: UseFormRegister<Inputs>;
  buttons: ReactNode;
  errors: FieldErrors<Inputs>;
}

const NameForm: FunctionComponent<NameFormProps> = ({
  onSubmit,
  register,
  buttons,
  errors,
}) => {
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <TextField
          className="max-w-[300px]"
          placeholder="Age"
          {...register("age", {
            required: true,
            pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
          })}
        />
        {errors.age && <span>Number field required</span>}
      </div>
      {buttons}
    </form>
  );
};

export default NameForm;
