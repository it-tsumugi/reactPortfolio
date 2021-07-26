import { BrowserRouter, Route, Switch } from "react-router-dom";
import { VFC } from "react";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Home } from "../components/pages/Home";
import { Profile } from "../components/pages/Profile";
import { Skill } from "../components/pages/Skill";
import { Product } from "../components/pages/Product";
import { Study } from "../components/pages/Study";
import { Contact } from "../components/pages/Contact";
import { FooterFixed } from "../components/templates/FooterFixed";
import { Page404 } from "../components/pages/Page404";

const Path = {
  home: "/",
  profile: "/profile",
  skill: "/skill",
  product: "/product",
  study: "/book",
  contact: "/contact",
};

const homeUrl = process.env.PUBLIC_URL;

export const ComponentRouter: VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={homeUrl + Path.home}>
          <FooterFixed>
            <Home />
          </FooterFixed>
        </Route>
        <Route path={homeUrl + Path.profile}>
          <DefaultLayout>
            <Profile />
          </DefaultLayout>
        </Route>
        <Route path={homeUrl + Path.skill}>
          <DefaultLayout>
            <Skill />
          </DefaultLayout>
        </Route>
        <Route path={homeUrl + Path.product}>
          <FooterFixed>
            <Product />
          </FooterFixed>
        </Route>
        <Route path={homeUrl + Path.study}>
          <DefaultLayout>
            <Study />
          </DefaultLayout>
        </Route>
        <Route path={homeUrl + Path.contact}>
          <FooterFixed>
            <Contact />
          </FooterFixed>
        </Route>
        <Route path="*">
          <FooterFixed>
            <Page404 />
          </FooterFixed>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
