import { Reset } from "styled-reset";
import GlobalStyles from "./style/GlobalStyle";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import HomePage from "./Screens/HomePage";
import Header from "../src/Components/Header/Header";
import SignUp from "../src/Screens/SignUp";
function App() {
  const routes = (
    <Switch>
      <Route exact path="/LoginPage" component={LoginPage} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
      <div>{routes}</div>
    </div>
  );
}

export default App;
