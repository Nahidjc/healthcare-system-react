import "./App.css";
import Carosel from "./pages/Header/Carosel";
import Header from "./pages/Header/Header";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carosel></Carosel>
      <Services></Services>
    </div>
  );
}

export default App;
