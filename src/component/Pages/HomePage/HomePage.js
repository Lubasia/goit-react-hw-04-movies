import { Component } from 'react';
import MoviesList from '../../MoviesList';
import dotaApi from '../../../api/dota.api';

export class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    dotaApi
      .GetMovieTrending()
      .then(results => this.setState({ movies: results }))
      .catch(error => console.log(error));
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
