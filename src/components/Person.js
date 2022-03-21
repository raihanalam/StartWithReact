import React, { Component } from "react";

class Person extends Component{

     constructor(props){
          super(props)
     }

     render(){
          return(
               <div>
               <h1>Hey,</h1>
               <h3>Name:{this.props.name}</h3>
               <h4>Age: {this.props.age}</h4>
               <small>Fullstack Software Developer</small>
          </div>
          )
     }
}
//This is a arrow function
/*
let Person = (props) =>{
     return(
          <div>
               <h1>Hey,</h1>
               <h3>Name:{props.name}</h3>
               <h4>Age: {props.age}</h4>
               <small>Fullstack Software Developer</small>
          </div>
     )

}*/
//This is a normal function
/*
function Person(){
     return(
          <div>
               <h1>Raihan Alam</h1>
               <h3>Fullstack Software Developer</h3>
          </div>
     )
}
*/
export default Person;
