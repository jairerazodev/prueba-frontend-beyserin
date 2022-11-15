import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/global.scss';
import ResumenCliente from '../components/ResumenCliente';
import Formulario from '../components/Formulario';
import NotFound from '../pages/NotFound';

const App = () => {
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/"  component={Formulario} />
            <Route exact path="/resumen" component={ResumenCliente} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}

export default App;
