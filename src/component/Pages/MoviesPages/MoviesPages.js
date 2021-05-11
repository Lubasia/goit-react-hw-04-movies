import { Component } from 'react';
import PropTypes from 'prop-types';
import dotaApi from '../../../api/dota.api';
import queryString from 'query-string';
import MoviesList from '../../MoviesList';
import Searchbar from '../../Searchbar';

export class MoviesPages extends Component {
  state = {
    movies: [],
    page: '',
    error: null,
    query: '',
  };
  componentDidMount() {
    const { location } = this.props;

    const { query } = queryString.parse(location.search);

    query &&
      dotaApi.GetSearchMovies(query).then(results => {
        this.setState({ movies: results });
      });
  }
  handleSubmit = query => {
    const { history } = this.props;
    this.setState({ query });
    dotaApi
      .GetSearchMovies(query)
      .then(results => {
        this.setState({ movies: results });
      })
      .catch(error => console.log(error));

    history.push({
      pathname: history.pathname,
      search: `query=${query}`,
    });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        <MoviesList movies={this.state.movies} location={this.props.location} />
      </>
    );
  }
}

MoviesPages.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    query: PropTypes.string,
  }).isRequired,
};

export default MoviesPages;
