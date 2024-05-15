import type { CompanyType } from "@/types/apiResponseType";
import s from "./CompanyCard.module.css";
import { getGeoLink } from "@/utils/getGeoLink";
import ConfirmableLink from "../ConfirmableLink/ConfirmableLink";

export default function CompanyCard({ company }: { company: CompanyType }) {
  return (
    <article className={s.card}>
      <h2>
        Наименование: <span className={s.data}>{company.value}</span>
      </h2>

      {!!company.data.name?.full_with_opf && (
        <p className={s.p1}>
          Полное наименование:{" "}
          <span className={s.data}>{company.data.name.full_with_opf}</span>
        </p>
      )}

      {!!company.data.type && company.data.type === "INDIVIDUAL" ? (
        <p className={s.p1}>
          Тип организации:{" "}
          <span className={s.data}>индивидуальный предприниматель</span>
        </p>
      ) : (
        <p className={s.p1}>
          Тип организации: <span className={s.data}>юридическое лицо</span>
        </p>
      )}

      {!!company.data.inn && (
        <p className={s.p1}>
          ИНН: <span className={s.data}>{company.data.inn}</span>
        </p>
      )}

      {!!company.data.kpp && (
        <p className={s.p1}>
          КПП: <span className={s.data}>{company.data.kpp}</span>
        </p>
      )}

      {!!company.data.ogrn && (
        <p className={s.p1}>
          ОГРН: <span className={s.data}>{company.data.ogrn}</span>
        </p>
      )}

      {!!company.data.founders && company.data.founders.length && (
        <>
          <p className={s.p1}>Основатель(ли):</p>
          {company.data.founders.map((f) => (
            <p key={f.hid} className={s.p2}>
              <span className={s.data}>{f.name}</span>
            </p>
          ))}
        </>
      )}

      {!!company.data.address?.value && (
        <div className={s.p1}>
          Адрес: <ConfirmableLink href={getGeoLink(company.data.address.value)} text={company.data.address.value} description="Искать адрес на сайте Яндекс.Карт?" className={s.data} />
        </div>
      )}
    </article>
  );
}
