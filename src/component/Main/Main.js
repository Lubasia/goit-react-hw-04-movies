// import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import NotFound from '../Pages/NotFound';
import HomePage from '../Pages/HomePage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';
import MoviesPages from '../Pages/MoviesPages';
import routes from '../../routes';
// const HomePage = lazy(() => import('../Pages/HomePage'));
// const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
// const MoviesPages = lazy(() => import('../Pages/MoviesPage'));

const Main = () => {
  return (
    <main>
      {/* <Suspense> */}
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.moviePage} component={MoviesPages} />
        <Route component={NotFound} />
      </Switch>
      {/* </Suspense> */}
    </main>
  );
};

export default Main;
