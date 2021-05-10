import { NavLink } from 'react-router-dom';
import style from '../Header/Header.module.css';
import routes from '../../routes';

const Header = () => {
  return (
    <header className={style.Header}>
      <nav>
        <ul className={style.HeaderList}>
          <li className={style.HeaderListItem}>
            <NavLink
              exact
              to={routes.home}
              className={style.HeaderLink}
              activeClassName={style.activeLink}
            >
              HOME
            </NavLink>
          </li>
          <li className={style.HeaderListItem}>
            <NavLink
              to={routes.moviePage}
              className={style.HeaderLink}
              activeClassName={style.activeLink}
            >
              MOVIES
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
