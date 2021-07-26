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

export const ComponentRouter: VFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={Path.home}>
          <DefaultLayout fixed={true}>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path={Path.profile}>
          <DefaultLayout fixed={false}>
            <Profile />
          </DefaultLayout>
        </Route>
        <Route path={Path.skill}>
          <DefaultLayout fixed={false}>
            <Skill />
          </DefaultLayout>
        </Route>
        <Route path={Path.product}>
          <DefaultLayout fixed={true}>
            <Product />
          </DefaultLayout>
        </Route>
        <Route path={Path.study}>
          <DefaultLayout fixed={false}>
            <Study />
          </DefaultLayout>
        </Route>
        <Route path={Path.contact}>
          <DefaultLayout fixed={true}>
            <Contact />
          </DefaultLayout>
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
