import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchBar></SearchBar>
          </Route>
          <Route path="/meals/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
