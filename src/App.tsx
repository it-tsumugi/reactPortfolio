import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

import {Home} from "./component/pages/Home";
import {Profile} from "./component/pages/Profile";
import {Skill} from "./component/pages/Skill";
import {Product} from "./component/pages/Product";
import {Contact} from "./component/pages/Contact";
import { Book } from "./component/pages/Book";

export const Path = {
  home: "/component/pages/Home",
  profile: "/component/pages/Profile",
  skill: "/component/pages/Skill",
  product: "/component/pages/Product",
  book: "/component/pages/Book",
  contact: "/component/pages/Contact",
};

export function App (){
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={Path.home}>Home</Link><br />
        <Link to={Path.profile}>Profile</Link><br />
        <Link to={Path.skill}>Skill</Link><br />
        <Link to={Path.product}>Product</Link><br />
        <Link to={Path.book}>Book</Link><br />
        <Link to={Path.contact}>Contact</Link><br />
      </div>
      <Switch>
        <Route exact path={Path.home} component={Home}/>
        <Route path={Path.profile} component={Profile}/>
        <Route path={Path.skill} component={Skill}/>
        <Route path={Path.product} component={Product}/>
        <Route path={Path.book} component={Book}/>
        <Route path={Path.contact} component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
};
