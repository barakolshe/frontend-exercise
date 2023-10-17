"use client";
import FormLayout from "@/components/shared/FormLayout/FormLayout";
import Button from "@/components/ui/Button/Button";
import { TextField } from "@/components/ui/TextField/TextField";
import { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

interface NameFormProps {
  onSubmit: (data: object) => void;
}

const NameForm: FunctionComponent<NameFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const _onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmit(data);
  };

  return (
    <FormLayout onSubmit={handleSubmit(_onSubmit)}>
      <TextField
        className="max-w-[300px]"
        placeholder="First name"
        {...register("firstName", { required: true })}
      />

      <TextField
        placeholder="Last name"
        className="max-w-[300px]"
        {...register("lastName", { required: true })}
      />

      <Button type="submit" className="max-w-[100px]">
        Submit
      </Button>
    </FormLayout>
  );
};

export default NameForm;
