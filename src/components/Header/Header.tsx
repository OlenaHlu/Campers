import css from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  function getClassActiveLink({ isActive }: { isActive: boolean }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <header className={css.headerContainer}>
      <img className={css.logo} src={logo} alt="Logo" />
      <nav className={css.navContainer}>
        <NavLink className={getClassActiveLink} to="/" end>
          Home
        </NavLink>
        <NavLink className={getClassActiveLink} to="/catalog" end>
          Catalog
        </NavLink>
        {!isHomePage && (
          <NavLink className={getClassActiveLink} to="/favorites" end>
            Favorites
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
