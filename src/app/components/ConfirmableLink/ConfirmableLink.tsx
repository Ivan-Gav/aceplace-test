"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import s from "./ConfirmableLink.module.css";
import cn from "classnames";

type ConfirmableLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  text: string;
  href: string;
  className?: string;
  description?: string;
};

export default function ConfirmableLink(props: ConfirmableLinkProps) {
  const { text, href, description, className, ...restProps } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.documentElement.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };

  return (
    <>
      <a onClick={onClick} className={cn(s.link, className)} {...restProps}>
        {text}
      </a>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>{description ? description : "Хотите перейти по внешней ссылке"}</p>
        <div className={s.btn_group}>
          <button className={cn(s.btn, s.cancel)} onClick={handleCloseModal}>
            Нет
          </button>
          <button
            className={cn(s.btn, s.confirm)}
            onClick={() => {
              handleCloseModal();
              window.open(href, "_blank");
            }}
          >
            Да
          </button>
        </div>
      </Modal>
    </>
  );
}
