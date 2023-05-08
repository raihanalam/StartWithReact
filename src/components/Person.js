import React, { Component } from "react";
import Books from './components/Books';

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




 //Supported in react version 16.4

 state = {
     books:[
       {id:1, bookName:"Theory about machine", writer:"Alan Turing"},
       {id:2, bookName:"Solution from error.", writer:"Freakman Kalo"},
       {id:3, bookName:"Theory about machine", writer:"Michel Hauge"},
     ]
   }
 /*
   ChangeBookState = (newBookName)=>{
     this.setState({
       books:[
         {bookName: newBookName, writer:"Alan Turing"},
         {bookName:"Learn from error.", writer:"Raihan Alam"},
         {bookName:"The warefare ", writer:"Michel Hauge"},
       ]
     })
   }
 */
   changeFromInput = (event, index)=>{
 
     //changing value by index using spread operator
     const book = {
       ...this.state.books[index]
 
     }
 
     book.bookName = event.target.value;
 
     const books= [...this.state.books];
     books[index] = book;
 
     this.setState({books: books})
 
     /*
     this.setState({
       books:[
         {bookName: event.target.value, writer:"Alan Turing"},
         {bookName:"Learn from error.", writer:"Raihan Alam"},
         {bookName:"The warefare ", writer:"Michel Hauge"},
       ]
     })
     */
   }
 
   deleteBookState = (index) =>{
     //Many deleteing Ways
     //const books = this.state.books;
     //const books = this.state.books.slice(); 
     
     
     //const books = this.state.books.map(item => item); //Taking the item and returning also
     
     const books = [...this.state.books]; //It will splite out individually  by spread operator
     books.splice(index, 1);
 
     this.setState({books: books})
 
   }



       //CSS style as a object
       const style1 = {
          color: "Green",
          fontSize:"20px",
          backgroundColor:"black"
          
        }
    
        //Mapping the component from state and sending value to the jsx by props. 




     //    <h3 style={style1}>All Books</h3>
        {/*
        Comment in a JSX code
        <input type="text" onChange={this.changeFromInput}/>
        <button onClick={()=>this.ChangeBookState("Raihans 1st book")}>Change State</button>
        */}
     //    {books}
        
export default Person;
