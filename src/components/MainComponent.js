import React, { Component } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";


class MainComponent extends Component {
     /*
     constructor(props){
          super(props)
     }
     */
     render() {
          return (
               <div className="App">
                    <nav className="nav-bar">
                              <NavLink  to="/">Home</NavLink>
                              <NavLink to="/new-book">Book</NavLink>
                    </nav>
                    <Routes>

                         <Route path="/" exact render={() => <h1>Home</h1>} />
                         <Route path="/new-book" render={() => <h1>New Book</h1>} />
                    </Routes>
               </div>
          )
     }
}

export default MainComponent;