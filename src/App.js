import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import RideSearch from "./Components/RideSearch/RideSearch";
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/search/:id">
            <RideSearch></RideSearch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
