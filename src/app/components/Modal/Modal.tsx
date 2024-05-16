import { IoMdClose } from "react-icons/io";
import s from "./Modal.module.css";
import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, children } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={onClose}>
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
}
