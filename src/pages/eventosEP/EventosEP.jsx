import Card from "../../components/card/Card";
import S from "./eventosEP.module.scss";

import e1 from "../../assets/images/ev1.png";
import e2 from "../../assets/images/ev2.png";
import e3 from "../../assets/images/ev3.png";

export default function EventosEP() {
  return (
    <main className={`container ${S.page}`}>
      <h1 className={S.title}>Eventos &amp; Palestras</h1>

      <section className={S.lista}>
        <article className={S.col}>
          <Card
            img={e1}
            alt="Palestra com jovens em roda de conversa"
            title="Empoderando Jovens para o Futuro"
            text="Atividade: Palestra motivacional sobre liderança jovem e transformação social.
            
Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            buttonText="Quero Participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={e2}
            alt="Grupo aprendendo tecnologia em laboratório"
            title="Tecnologia que Transforma"
            text="Atividade: Workshop de introdução à programação e inovação digital.
            
Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
            buttonText="Quero Participar"
          />
        </article>

        <article className={`${S.col} ${S.colSep}`}>
          <Card
            img={e3}
            alt="Reunião sobre carreira e entrevistas"
            title="Carreira e Primeiro Emprego"
            text="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.
            
Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            buttonText="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
}
