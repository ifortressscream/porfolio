import { Switch, Route } from "react-router";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./styles/customStyle.css";
import HackReactor from "./pages/HackReactor";
import ShoppeeSite from "./component/hack-reactor/ShoppeeSite/ShoppeeSite";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/hack-reactor">
          <HackReactor />
        </Route>
        <Route path="/shoppee">
          <ShoppeeSite />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
