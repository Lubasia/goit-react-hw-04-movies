import { NavLink } from 'react-router-dom';
import style from './Reviews.module.css';

const Reviews = ({ url, location }) => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.listItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: location,
            }}
            className={style.link}
            activeClassName={style.activeLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={style.listItem}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: location,
            }}
            className={style.link}
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
