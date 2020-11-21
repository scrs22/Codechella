import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route,Switch } from "react-router-dom";
import HomeNavbar from "./components/Navbar";
import Demographics from "./components/Home";
import Home from "./components/Home";

function App() {
  return (

    <div>
<BrowserRouter>
<HomeNavbar />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />

        </Switch>
      </main>
      </BrowserRouter>
    </div>

  );
}

export default App;
