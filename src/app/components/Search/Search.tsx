"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import cn from "classnames";
import { IoSearch } from "react-icons/io5";
import s from "./Search.module.css";
import { fetchData } from "@/utils/fetchData";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isValid, setIsValid] = useState(true);

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    !value ? setIsValid(true) : setIsValid(/^(\d{10}|\d{12})$/.test(value));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid && searchQuery) {
      await fetchData(searchQuery);
      router.push(`/info/${searchQuery}`);
    }
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        type="number"
        placeholder="Введите ИНН"
        value={searchQuery}
        onChange={onChange}
        className={cn(s.input, {
          [s.invalid]: !isValid,
          [s.valid]: isValid && !!searchQuery,
        })}
      />
      <button disabled={!(isValid && searchQuery)} className={s.btn}>
        <IoSearch />
      </button>
    </form>
  );
}
