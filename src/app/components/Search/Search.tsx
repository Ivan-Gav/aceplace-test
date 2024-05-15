"use client";

import { useState } from "react";
import cn from "classnames";
import { IoSearch } from "react-icons/io5";
import s from './Search.module.css'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    !value ? setIsValid(true) : setIsValid(/^(\d{10}|\d{12})$/.test(value));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid && searchQuery) {
      // ---
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        placeholder="Введите ИНН"
        value={searchQuery}
        onChange={onChange}
        className={cn( s.input, {[s.invalid]: !isValid, [s.valid]: isValid && !!searchQuery })}
      />
      <button disabled={!(isValid && searchQuery)} className={s.btn}><IoSearch /></button>
    </form>
  );
}
