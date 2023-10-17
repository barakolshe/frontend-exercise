import { cn } from "@/utils/tailwindUtils";
import { FunctionComponent } from "react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  className,
  open,
  onClose,
  children,
  ...props
}) => {
  return open ? (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-modal-foreground flex flex-col justify-center align-middle"
      onClick={onClose}
    >
      <div
        className="bg-modal-background w-[60%] xl:w-[800px]  mx-auto rounded-md p-8 shadow-md relative"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
