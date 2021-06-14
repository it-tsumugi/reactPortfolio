import {BrowserRouter, Link} from "react-router-dom";

import Home from "./component/pages/Home";
import Profile from "./component/pages/Profile";
import Skill from "./component/pages/Skill";
import Product from "./component/pages/Product";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Profile />
      <Skill />
      <Product />
      <Contact />
    </div>
  );
}

export default App;