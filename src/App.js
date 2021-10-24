import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";
import Home from "./Pages/Home";
import LoginLayout from "./layouts/LoginLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AddProduct from "./Pages/AddProduct";
import AccountPage from "./Pages/AccountPage";
import ProductDetailPage from "./Pages/ProductDetail";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <div>
      <Provider store={store}>
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
            <Route path="/add-product">
              <MainLayout>
                <AddProduct />
              </MainLayout>
            </Route>
            <Route path="/account-page">
              <MainLayout>
                <AccountPage />
              </MainLayout>
            </Route>
            <Route path="/ItemDetailPage/:id">
              <MainLayout>
                <ProductDetailPage />
              </MainLayout>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
