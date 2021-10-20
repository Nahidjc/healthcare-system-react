import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Contact from "./pages/Contact/Contact";
import Carosel from "./pages/Header/Carosel";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Services from "./Services/Services";
import DetailsService from "./pages/DetailsService/DetailsService";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Carosel></Carosel>
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/appoinment">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/register">
              <Signup></Signup>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/service-details/:id">
              <DetailsService></DetailsService>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
