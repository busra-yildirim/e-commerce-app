import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import LoginLayout from "./layouts/LoginLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/sign-in">
            <LoginLayout>
              <SignIn />
            </LoginLayout>
          </Route>
          <Route path="/sign-up">
            <LoginLayout>
              <SignUp />
            </LoginLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
