import React, { Component } from "react";
import '../stylesheets/book.css';

class Books extends Component{
     /*
     constructor(props){
          super(props)
     }
     */
     render(){
          return(
               <div className="Book">
                    <h3 onClick={this.props.delete}>Book Name:{this.props.bookName}</h3>
                    <h4>Writer: {this.props.writer}</h4>
                    <input type="text"  onChange={this.props.inputName} value={this.props.bookName}/>
               </div>
          )
     }
}

/*
const Books = props =>{
     return(
          <div className="Book">
               <h3 onClick={props.delete}>Book Name:{props.bookName}</h3>
               <h4>Writer: {props.writer}</h4>
               <input type="text"  onChange={props.inputName} value={props.bookName}/>
          </div>
     )
}
*/

export default Books