import { Route, Switch } from 'react-router';
import HomePage from '../Pages/HomePage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';
import MoviePage from '../Pages/MoviePage';
import NotFound from '../Pages/NotFound';
import routes from '../../routes';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.moviePage} component={MoviePage} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};

export default Main;
