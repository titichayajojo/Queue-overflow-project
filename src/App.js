import { Reset } from "styled-reset";
import GlobalStyles from "./style/GlobalStyle";
import Header from "./Components/Header/Header";
import QuestionPage from "./QuestionPage";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import HomePage from "./Screens/HomePage";
function App() {
  const routes = (
    <Switch>
      <Route exact path="/HomePage" component={HomePage} />
      <Route exact path="/LoginPage" component={LoginPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <GlobalStyles />
      <Header />
      <div>{routes}</div>

      {/* <Reset /> */}
      {/* <QuestionPage /> */}
    </div>
  );
}

export default App;
