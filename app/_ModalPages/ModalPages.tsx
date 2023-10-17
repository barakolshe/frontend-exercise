import React, { FunctionComponent } from "react";
import NameForm from "./_NameForm/NameForm";
import AgeForm from "./AgeForm.tsx/AgeForm";
import Review from "./Review/Review";
import Button from "@/components/ui/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  firstName: string;
  lastName: string;
  age: number;
};

const pagesAmout = 3;

interface ModalPagesProps {
  closeModal: () => void;
}

const ModalPages: FunctionComponent<ModalPagesProps> = ({ closeModal }) => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({});

  const onSubmitIntermediate: SubmitHandler<Inputs> = () => {
    setPageIndex(pageIndex + 1);
  };

  const onSubmitEnd: SubmitHandler<Inputs> = (data) => {
    Object.entries(data).map(([key, value]) => {
      localStorage.setItem(key, value.toString());
    });
    closeModal();
  };

  const buttons = (
    <div className="w-full flex flex-row justify-end gap-4">
      {pageIndex !== 0 && (
        <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>
      )}
      {pageIndex !== pagesAmout - 1 ? (
        <Button type="submit">Next</Button>
      ) : (
        <Button type="submit">Finished</Button>
      )}
    </div>
  );

  const pages = [
    <NameForm
      key="nameForm"
      onSubmit={handleSubmit(onSubmitIntermediate)}
      register={register}
      buttons={buttons}
      errors={errors}
    />,
    <AgeForm
      key="ageForm"
      onSubmit={handleSubmit(onSubmitIntermediate)}
      register={register}
      buttons={buttons}
      errors={errors}
    />,
    <Review
      key="review"
      data={getValues()}
      onSubmit={handleSubmit(onSubmitEnd)}
      buttons={buttons}
    />,
  ];

  return pages[pageIndex];
};

export default ModalPages;
