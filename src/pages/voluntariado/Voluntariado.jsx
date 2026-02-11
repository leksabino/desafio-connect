import Card from "../../components/card/Card";
import S from "./voluntariado.module.scss";

import v1 from "../../assets/images/vol1.png";
import v2 from "../../assets/images/vol2.png";
import v3 from "../../assets/images/vol3.png";

export default function Voluntariado() {
  return (
    <main className={`container ${S.page}`}>
      <h1 className={S.title}>Voluntariado</h1>

      <section className={S.lista}>
        <article className={S.col}>
          <Card
            img={v1}
            alt="Mutirão de reciclagem com caixas de materiais recicláveis"
            title="Mutirão de reciclagem"
            text="Coletar materiais recicláveis e orientar sobre descarte consciente."
            buttonText="Quero participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={v2}
            alt="Aulas de tecnologia com jovens em computadores"
            title="Aulas de Tecnologia"
            text="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            buttonText="Quero participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={v3}
            alt="Atividade esportiva e inclusão em grupo"
            title="Esporte e Inclusão"
            text="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            buttonText="Quero participar"
          />
        </article>
      </section>
    </main>
  );
}
