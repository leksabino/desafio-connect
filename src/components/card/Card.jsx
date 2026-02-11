import S from "./card.module.scss";

export default function Card({ img, alt, title, text, buttonText }) {
  return (
    <div className={S.card}>
      <img className={S.img} src={img} alt={alt} />
      <h2 className={S.title}>{title}</h2>
      <p className={S.text}>{text}</p>
      <button className={S.btn} type="button">{buttonText}</button>
    </div>
  );
}
