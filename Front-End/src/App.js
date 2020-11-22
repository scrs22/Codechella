import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route,Switch } from "react-router-dom";
import HomeNavbar from "./components/Navbar";
import Demographics from "./components/Home";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (

    <div>
<BrowserRouter>
<HomeNavbar />
      <main>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />

        </Switch>
      </main>
      </BrowserRouter>
    </div>

  );
}

export default App;
