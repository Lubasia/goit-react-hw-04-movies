import { Component } from 'react';

import dotaApi from '../../api/dota.api';
import style from '../MoviesList/MoviesList.module.css';

export default class Cast extends Component {
  state = {
    moviesList: [],
  };

  componentDidMount() {
    dotaApi
      .GetMovieCredits(this.props.id)
      .then(cast => this.setState({ moviesList: cast }))
      .catch(error => console.log(error));
  }

  render() {
    const { moviesList } = this.state;
    return (
      <ul className={style.MoviesList}>
        {moviesList.map(actor => (
          <li className={style.MoviesListItem} key={actor.id}>
            <div>
              <img
                src={
                  actor.profile_path
                    ? `http://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlcoCV_lRyVx6rgzVICKS6dyURCfhpIvs9g&usqp=CAU`
                }
                alt={`Actor: ${actor.name}`}
                width={200}
                className={style.MoviesCard}
              />
            </div>
            <h3 className={style.actorTitle}>{actor.name}</h3>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
