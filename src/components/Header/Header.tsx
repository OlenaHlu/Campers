import css from "./Header.module.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  function getClassActiveLink({ isActive }: { isActive: boolean }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <header className={css.headerContainer}>
      <img className={css.logo} src={logo} />
      <nav className={css.navContainer}>
        <NavLink className={getClassActiveLink} to="/">
          Home
        </NavLink>
        <NavLink className={getClassActiveLink} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
