import './css/normalize.css';
import './css/style.css';
import React from "react";
import Main from "./pages/main";
import Archive from "./pages/archive";
import Form from "./pages/form";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "./routing/routing";
import NotFound from "./pages/notFound";

const App=()=> {
  return (
      <BrowserRouter>
          <Switch>
              <Route path={AppRoute.MAIN} exact component={Main}/>
              <Route  path={AppRoute.ARCHIVE} exact component ={Archive}/>
              <Route path={AppRoute.FORM} exact component ={Form}/>
              <Route path={AppRoute.NOTFOUND} exact component={NotFound} />
          </Switch>
      </BrowserRouter>
        )
};

export default App;







