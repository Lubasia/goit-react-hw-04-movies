import style from '../MovieDetails/MovieDetails.module.css';
const MovieDetails = ({ state }) => {
  return (
    <div className={style.Details}>
      <img
        className={style.images}
        src={
          state.poster_path &&
          `https://image.tmdb.org/t/p/w500/${state.poster_path}`
        }
        alt={`${state.title} poster`}
      />
      <div className={style.DetailsWraper}>
        <h1 className={style.movieTitle}>{state.title}</h1>
        <p> Release date: {state.release_date}</p>
        <p>
          User Score:
          <span> {state.vote_average * 10}%</span>
        </p>
        <h2>Overview</h2>
        <p>{state.overview}</p>
        <h2>Genres</h2>
        {state.genres.map(genre => (
          <span className={style.Genres} key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
