import "./sass/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-horizon/src/bootstrap-horizon.css";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
