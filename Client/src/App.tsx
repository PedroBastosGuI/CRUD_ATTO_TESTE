import { Fragment } from "react";
import { GlobalStyled } from "./Global/styled";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Home } from "./Pages/Home";
import {SingUP} from "./Pages/SingUp"
import { Edit } from "./Pages/Edit";


function App() {
  return (
    <Fragment>
    <GlobalStyled/>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/singup" >
            <SingUP/>
          </Route>
          <Route path="/edit/:id">
            <Edit/>
          </Route>
        </Switch>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
