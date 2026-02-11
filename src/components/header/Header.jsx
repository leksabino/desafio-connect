import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";
import S from "./header.module.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function onResize() {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuAberto(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={S.wrap}>
      <header className={S.header}>
        <Link to="/" className={S.brand} aria-label="Ir para Home">
          <img className={S.imgLogo} src={Logo} alt="Logo Connect" />
        </Link>

        {!isMobile && (
          <nav className={S.nav} aria-label="Navegação principal">
            <Link className={S.link} to="/doacao">Doação</Link>
            <Link className={S.link} to="/voluntariado">Voluntariado</Link>
            <Link className={S.link} to="/mentoria">Mentoria</Link>
            <Link className={S.link} to="/eventosEP">Eventos &amp; Palestras</Link>
          </nav>
        )}

        <button
          type="button"
          className={S.userBtn}
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-label="Abrir menu do usuário"
        >
          <img className={S.imgUser} src={avatar} alt="Foto do usuário" />
        </button>
      </header>

      <nav className={menuAberto ? S.navUser : S.closedNav}>
        <Link to="/usuario" onClick={() => setMenuAberto(false)}>Perfil</Link>
        <Link onClick={() => setMenuAberto(false)}>Voluntariados</Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações de conta</Link>

        {isMobile && (
          <div className={S.mobileLinks}>
            <Link className={S.link} to="/doacao" onClick={() => setMenuAberto(false)}>Doação</Link>
            <Link className={S.link} to="/voluntariado" onClick={() => setMenuAberto(false)}>Voluntariado</Link>
            <Link className={S.link} to="/mentoria" onClick={() => setMenuAberto(false)}>Mentoria</Link>
            <Link className={S.link} to="/eventosEP" onClick={() => setMenuAberto(false)}>Eventos &amp; Palestras</Link>
          </div>
        )}

        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </div>
  );
}
