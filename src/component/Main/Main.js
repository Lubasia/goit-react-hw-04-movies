import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import NotFound from '../../Pages/NotFound';
import routes from '../../routes';
import Loader from 'react-loader-spinner';
const HomePage = lazy(() =>
  import('../../Pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../Pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPages = lazy(() =>
  import('../../Pages/MoviesPages' /* webpackChunkName: "movies-page" */),
);

const Main = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.moviePage} component={MoviesPages} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;
