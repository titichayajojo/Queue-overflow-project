import { Reset } from "styled-reset";
import GlobalStyles from "./style/GlobalStyle";
import {
  Route,
  Switch,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import LoginPage from "./Screens/LoginPage";
import HomePage from "./Screens/HomePage";
import UserPage from "./Screens/UserPage";
import QuestionPage from "./QuestionPage";
import TagsPage from "./Screens/TagsPage";
import Header from "../src/Components/Header/Header";
import SignUp from "../src/Screens/SignUp";

import ViewQuestionPage from "./Screens/ViewQuestionPage";
import QuestionPage from "./QuestionPage";
import AskPage from "./Screens/AskPage";

function App() {
  const routes = (
    <Switch>
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Questions" component={QuestionPage} />
      <Route path="/Tags" component={TagsPage} />

      <Route path="/ViewQuestionPage/:item" component={ViewQuestionPage} />
      <Route path="/" component={HomePage} />

      {/* <Redirect to="/" /> */}
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
