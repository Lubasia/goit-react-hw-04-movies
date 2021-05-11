import { NavLink, withRouter } from 'react-router-dom';
import style from '../MoviesList/MoviesList.module.css';
import routes from '../../routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={style.MoviesList}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={style.MoviesListItem}>
          <NavLink
            to={{
              pathname: `${routes.moviePage}/${id}`,
              state: { from: location },
            }}
          >
            <img
              className={style.MoviesCard}
              src={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={`${title} poster`}
            />
            <p>{title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
