import Card from "../../components/card/Card";
import S from "./mentoria.module.scss";

import m1 from "../../assets/images/mentoria1.png";
import m2 from "../../assets/images/mentoria2.png";
import m3 from "../../assets/images/mentoria3.png";

export default function Mentoria() {
  return (
    <main className={`container ${S.page}`}>
      <h1 className={S.title}>Mentoria</h1>

      <section className={S.lista}>
        <article className={S.col}>
          <Card
            img={m1}
            alt="Mentoria sobre currículo e mercado de trabalho"
            title="Mentoria de Carreira e Emprego"
            text="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            buttonText="Quero participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={m2}
            alt="Compartilhamento de experiência profissional"
            title="Compartilhe Experiência"
            text="Oriente jovens e profissionais iniciantes em sua área."
            buttonText="Quero participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={m3}
            alt="Acompanhamento em jornadas de aprendizado"
            title="Acompanhamento"
            text="Participe como guia em jornadas de aprendizado e desenvolvimento."
            buttonText="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
