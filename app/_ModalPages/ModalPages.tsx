import React, { FunctionComponent } from "react";
import NameForm from "./_NameForm/NameForm";
import AgeForm from "./AgeForm.tsx/AgeForm";
import Review from "./Review/Review";
import Button from "@/components/ui/Button/Button";

interface ModalPagesProps {}

const ModalPages: FunctionComponent<ModalPagesProps> = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [data, setData] = React.useState({});

  const addData = (newData: Object) => {
    setData({
      ...data,
      ...newData,
    });
    setPageIndex(pageIndex + 1);
  };

  console.log(data);

  const pages = [
    <NameForm key="nameForm" onSubmit={addData} />,
    <AgeForm key="ageForm" onSubmit={addData} />,
    <Review key="review" />,
  ];

  return (
    <>
      {pages[pageIndex]}
      <div className="w-full flex flex-row justify-end gap-4 absolute bottom-6 pr-20">
        {pageIndex !== 0 && (
          <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>
        )}
        {pageIndex !== pages.length ? (
          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
        ) : (
          <Button>Finished</Button>
        )}
      </div>
    </>
  );
};

export default ModalPages;
