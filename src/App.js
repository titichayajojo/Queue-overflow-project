import { Reset } from "styled-reset";
import GlobalStyles from "./style/GlobalStyle";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import HomePage from "./Screens/HomePage";
import ViewQuestionPage from "./Screens/ViewQuestionPage"
function App() {
  const routes = (
    <Switch>
      <Route exact path="/LoginPage" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      {/* <Route exact path="/ViewQuestionPage" component={ViewQuestionPage} /> */}
      <Route exact path="/ViewQuestionPage/:item" component={ViewQuestionPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Reset />
      <GlobalStyles />
      <div>{routes}</div>
    </div>
  );
}

export default App;
