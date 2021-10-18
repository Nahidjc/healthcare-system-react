import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Contact from "./pages/Contact/Contact";
import Carosel from "./pages/Header/Carosel";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Carosel></Carosel>
              <Services></Services>
              <Contact></Contact>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
