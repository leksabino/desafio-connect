import S from "./home.module.scss";
import hero from "../../assets/images/hero.png";

export default function Home() {
  return (
    <main className={`container ${S.main}`}>
      <section className={S.left}>
        <h1 className={S.title}>
          Projetos Sociais <br /> que transformam
        </h1>

        <p className={S.subtitle}>
          Conectamos sua empresa com projetos sociais impactantes.
          <br />
          Juntos, criamos mudanças reais na comunidade.
        </p>

        <button className={S.cta} type="button">
          Cadastrar Empresa <span aria-hidden="true">→</span>
        </button>

        <section className={S.stats}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
        </section>
      </section>

      <section className={S.right}>
        <img className={S.heroImg} src={hero} alt="Projetos sociais transformando comunidades" />
      </section>
    </main>
  );
}
