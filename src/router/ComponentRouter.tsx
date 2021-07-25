import { BrowserRouter, Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Home } from "../components/pages/Home";
import { Profile } from "../components/pages/Profile";
import { Skill } from "../components/pages/Skill";
import { Product } from "../components/pages/Product";
import { Book } from "../components/pages/study/Book";
import { Contact } from "../components/pages/Contact";
import { FooterFixed } from "../components/templates/FooterFixed";

export const Path = {
  home: "/",
  profile: "/profile",
  skill: "/skill",
  product: "/product",
  study: "/book",
  contact: "/contact",
};

export const ComponentRouter: VFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={Path.home}>
          <FooterFixed>
            <Home />
          </FooterFixed>
        </Route>
        <Route path={Path.profile}>
          <DefaultLayout>
            <Profile />
          </DefaultLayout>
        </Route>
        <Route path={Path.skill}>
          <DefaultLayout>
            <Skill />
          </DefaultLayout>
        </Route>
        <Route path={Path.product}>
          <FooterFixed>
            <Product />
          </FooterFixed>
        </Route>
        <Route path={Path.study}>
          <DefaultLayout>
            <Book />
          </DefaultLayout>
        </Route>
        <Route path={Path.contact}>
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
