import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FC } from "react";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { Home } from "../components/pages/Home";
import { Profile } from "../components/pages/Profile";
import { Skill } from "../components/pages/Skill";
import { Product } from "../components/pages/Product";
import { Book } from "../components/pages/study/Book";
import { Contact } from "../components/pages/Contact";

export const Path = {
    home: "/",
    profile: "/profile",
    skill: "/skill",
    product: "/product",
    study: "/book",
    contact: "/contact",
  };


export const ComponentRouter:FC = () =>{
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={Path.home}>
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          </Route>
          <Route path={Path.profile}>
            <HeaderOnly>
              <Profile />
            </HeaderOnly>
          </Route>
          <Route path={Path.skill}>
            <HeaderOnly>
              <Skill />
            </HeaderOnly>
          </Route>
          <Route path={Path.product}>
            <HeaderOnly>
              <Product />
            </HeaderOnly>
          </Route>
          <Route path={Path.study}>
            <HeaderOnly>
              <Book />
            </HeaderOnly>
          </Route>
          <Route path={Path.contact}>
            <HeaderOnly>
              <Contact />
            </HeaderOnly>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}