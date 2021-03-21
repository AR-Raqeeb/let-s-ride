import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
