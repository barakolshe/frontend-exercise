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
          placeholder="First name"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && <span>This field is required</span>}

        <TextField
          className="max-w-[300px]"
          placeholder="Last name "
          {...register("lastName", { required: true })}
        />
        {errors.lastName && <span>This field is required</span>}
      </div>
      {buttons}
    </form>
  );
};

export default NameForm;
