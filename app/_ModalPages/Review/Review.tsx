import { FormEventHandler, FunctionComponent, ReactNode } from "react";

interface ReviewProps {
  onSubmit: FormEventHandler;
  data: {
    [key: string]: any;
  };
  buttons: ReactNode;
}

const Review: FunctionComponent<ReviewProps> = ({
  data,
  onSubmit,
  buttons,
}) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {Object.entries(data).map(([key, value]) => {
        return (
          <div key={key}>
            <p>{key}</p>
            <p>{value}</p>
          </div>
        );
      })}
      {buttons}
    </form>
  );
};

export default Review;
