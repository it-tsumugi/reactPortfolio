import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

import Home from "./component/pages/Home";
import Profile from "./component/pages/Profile";
import Skill from "./component/pages/Skill";
import Product from "./component/pages/Product";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/component/pages/Home">Home</Link>
        <br />
        <Link to="/component/pages/Profile">Profile</Link>
        <br />
        <Link to="/component/pages/Skill">Skill</Link>
        <br />
        <Link to="/component/pages/Product">Product</Link>
        <br />
        <Link to="/component/pages/Contact">Contact</Link>
        <br />
      </div>
      <Switch>
        <Route exact path="/component/pages/Home">
          <Home />
        </Route>
        <Route path="/component/pages/Profile">
          <Profile />
        </Route>
        <Route path="/component/pages/Skill">
          <Skill />
        </Route>
        <Route path="/component/pages/Product">
          <Product />
        </Route>
        <Route path="/component/pages/Contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;