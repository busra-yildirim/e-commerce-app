import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import LoginLayout from "./layouts/LoginLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <Home />
            </MainLayout>
          </Route>
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
