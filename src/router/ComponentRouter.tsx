import { BrowserRouter, Route, Switch } from "react-router-dom";
import { VFC } from "react";

import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Home } from "../components/pages/Home";
import { Profile } from "../components/pages/Profile";
import { Skill } from "../components/pages/Skill";
import { Product } from "../components/pages/Product";
import { Study } from "../components/pages/Study";
import { Contact } from "../components/pages/Contact";
import { Page404 } from "../components/pages/Page404";

const Path = {
  home: "/",
  profile: "/profile",
  skill: "/skill",
  product: "/product",
  study: "/study",
  contact: "/contact",
};

export const ComponentRouter: VFC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={Path.home}>
          <DefaultLayout>
            <Home />
          </DefaultLayout>
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
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        </Route>
        <Route path={Path.study}>
          <DefaultLayout>
            <Study />
          </DefaultLayout>
        </Route>
        <Route path={Path.contact}>
          <DefaultLayout>
            <Contact />
          </DefaultLayout>
        </Route>
        <Route path="*">
          <DefaultLayout>
            <Page404 />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
