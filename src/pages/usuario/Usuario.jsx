import S from "./usuario.module.scss";
import avatar from "../../assets/images/avatar.jpg";

export default function Usuario() {
  return (
    <main className={`container ${S.page}`}>
      <section className={S.profileCard}>
        {}
        <div className={S.avatarWrap}>
          <img
            className={S.avatar}
            src={avatar}
            alt="Foto do perfil do usuário"
          />
        </div>

        {}
        <div className={S.info}>
          <h1 className={S.name}>Alexssander Sabino</h1>
          <p className={S.role}>Voluntário Ativo</p>

          <p className={S.bio}>
            Venho fazendo a diferença na comunidade. Creio que nossas ações podem
            transformar vidas e vivo em busca de novas oportunidades para ajudar.
          </p>

          <div className={S.meta}>
            <div className={S.metaItem}>
              <span className={S.icon} aria-hidden="true">📍</span>
              <span>Rio de Janeiro, RJ</span>
            </div>

            <div className={S.metaItem}>
              <span className={S.icon} aria-hidden="true">✉️</span>
              <span>leksabino@hotmail.com</span>
            </div>

            <div className={S.metaItem}>
              <span className={S.icon} aria-hidden="true">📅</span>
              <span>Membro desde Janeiro 2026</span>
            </div>
          </div>

          <div className={S.tags}>
            <span>Fullstack</span>
            <span>React</span>
            <span>APIs</span>
            <span>Developer</span>
          </div>
        </div>
      </section>
    </main>
  );
}
