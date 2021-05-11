import { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import dotaApi from '../../../api/dota.api';
import routes from '../../../routes';
import MovieDetails from '../../MovieDetails';
import Loader from '../../Loader';
import Cast from '../../Cast';
import Reviews from '../../Reviews';
// const Cast = lazy(() => import('../../Cast'));
// const Reviews = lazy(() => import('../../Reviews'));

class MovieDetailsPage extends Component {
  state = {
    title: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: [],
    poster_path: null,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;

    dotaApi
      .GetMovieDetails(movieId)
      .then(data => this.setState({ ...data }))
      .catch(error => console.log(error));
  }
  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.movies);
  };
  render() {
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <MovieDetails state={this.state} />

        <h3>Additional information</h3>
        {this.state.isLoading && <Loader />}
        <Reviews
          url={this.props.match.url}
          location={this.props.location.state}
        />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast`}
              render={props => (
                <Cast {...props} id={this.props.match.params.movieId} />
              )}
            />
            <Route
              exact
              path={`${this.props.match.url}/reviews`}
              render={props => (
                <Reviews {...props} id={this.props.match.params.movieId} />
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}
export default MovieDetailsPage;
