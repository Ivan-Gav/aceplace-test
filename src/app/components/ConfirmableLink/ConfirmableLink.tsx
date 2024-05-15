"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import s from './ConfirmableLink.module.css'
import cn from "classnames";

type ConfirmableLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  text: string;
  href: string;
  description?: string;
};

export default function ConfirmableLink(props: ConfirmableLinkProps) {
  const { text, href, description, ...restProps } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a onClick={onClick} {...restProps}>
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
              setIsModalOpen(false);
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
