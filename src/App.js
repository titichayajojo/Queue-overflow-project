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
import ViewQuestionPage from "./Screens/ViewQuestionPage";
import QuestionPage from "./QuestionPage";
import AskPage from "./Screens/AskPage";

import AskPage from "./Screens/AskPage";
import OtherUserPage from "./Screens/OtherUserPage";

function App() {
  const routes = (
    <Switch>
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Questions" component={QuestionPage} />
      <Route path="/Tags" component={TagsPage} />
      <Route path="/AskPage" component={AskPage} />
      <Route path="/ViewQuestionPage/:item" component={ViewQuestionPage} />
      <Route path="/OtherUserPage/:item" component={OtherUserPage} />
      <Route path="/User" component={UserPage} />
      <Route path="/" component={HomePage} />

      {/* <Redirect to="/" /> */}
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
