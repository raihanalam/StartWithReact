import React, { Component } from "react";
import '../stylesheets/book.css';

class Books extends Component{

     constructor(props){
          super(props)
     }

     render(){
          return(
               <div className="Book">
                    <h3 onClick={this.props.change}>Book Name:{this.props.name}</h3>
                    <h4>Age: {this.props.writer}</h4>
               </div>
          )
     }
}

export default Books