import { fetchData } from "@/utils/fetchData";
import Search from "@/app/components/Search/Search";
import CompanyCard from "@/app/components/CompanyCard/CompanyCard";
import s from "./page.module.css";

export default async function Page({ params }: { params: { query: string } }) {
  const data = await fetchData(params.query);

  const isData = !!data.suggestions && !!data.suggestions.length;

  return (
    <div className={s.box}>
      <Search />
      <hr className={s.divider} />
      <div className={s.results}>
        {!isData ? (
          <h2 className={s.results_title}>Ни одной организации с ИНН {params.query} не найдено.</h2>
        ) : (
          <>
            <h2 className={s.results_title}>Результаты поиска по ИНН {params.query}:</h2>
            {!!data.suggestions &&
              data.suggestions.map((comp) => (
                <CompanyCard company={comp} key={comp.data.hid} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}
