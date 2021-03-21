import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Destination from "./Components/Destination/Destination";
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
          <Route exact path="/home">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/login">
            <LoginPage></LoginPage>
          </Route>
          <PrivateRoute exact path="/destination">
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
