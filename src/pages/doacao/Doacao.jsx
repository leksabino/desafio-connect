import Card from "../../components/card/Card";
import S from "./doacao.module.scss";

import d1 from "../../assets/images/doacao1.png";
import d2 from "../../assets/images/doacao2.png";
import d3 from "../../assets/images/doacao3.png";

export default function Doacao() {
  return (
    <main className={`container ${S.page}`}>
      <h1 className={S.title}>Doação</h1>

      <section className={S.lista}>
        <article className={S.col}>
          <Card
            img={d1}
            alt="Doação de alimentos e itens essenciais"
            title="Instituto grande família"
            text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            buttonText="Quero Doar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={d2}
            alt="Doação de livros e materiais escolares"
            title="Projeto Futuro na Escola"
            text="Doe livros, cadernos, lápis, mochilas e canetas para apoiar jovens nos estudos."
            buttonText="Quero Doar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={d3}
            alt="Doação de computadores, tablets e celulares"
            title="Instituto Conecta Jovem"
            text="Doe computadores/tablets/celulares para ampliar acesso ao mundo digital e oportunidades."
            buttonText="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
}
