import { NavLink } from 'react-router-dom';
import style from '../Header/Header.module.css';

const Reviews = ({ url, location }) => {
  return (
    <nav>
      <ul className={style.HeaderList}>
        <li className={style.HeaderListItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location,
            }}
            className={style.HeaderLink}
            activeClassName={style.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={style.HeaderListItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location,
            }}
            className={style.HeaderLink}
            activeClassName={style.activeLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Reviews;
