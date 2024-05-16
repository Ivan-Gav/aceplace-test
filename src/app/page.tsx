import Search from "./components/Search/Search";
import s from "./page.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <Search />
    </main>
  );
}
