import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Home } from "./component/home";
import { Characters } from "./component/characters";
import { Vehicles } from "./component/vehicles";
import { Planets } from "./component/planets";
import injectContext from './store/appContext';


export class Layout extends React.Component{


    render(){
       return(
           <BrowserRouter>
           <nav className="nav d-inline-flex flex-column">
                <Link className="nav-link active" to="/characters">Characters</Link>
                <Link className="nav-link" to="/vehicles">Vehicles</Link>
                <Link className="nav-link" to="/planets">Planets</Link>
              </nav>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/characters" component={Characters}/>
               <Route path="/vehicles" component={Vehicles}/>
               <Route path="/planets" component={Planets}/>
               <Route render={()=> <h1>Not Found</h1>} />
           </Switch>
           </BrowserRouter>
       );
    }
}

export default injectContext(Layout);