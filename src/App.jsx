import './css/normalize.css';
import './css/style.css';
import React from "react";
import Main from "./pages/main";
import Archive from "./pages/archive";
import Form from "./pages/form";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {AppRoute} from "./routing/routing";
import NotFound from "./pages/notFound";
import {observer} from "mobx-react-lite";

const App= ()=> {

  return (
      <BrowserRouter>
          <Switch>
              <Route path={AppRoute.MAIN} exact >
               <Main/>
             </Route>

              <Route path={AppRoute.ARCHIVE} exact>
                  <Archive/>
              </Route>

              <Route path={AppRoute.FORM} exact>
                <Form />
              </Route>

              <Route path={AppRoute.NOTFOUND} exact component={NotFound} />
          </Switch>
      </BrowserRouter>
        )
}
 ;

export default App;







