import React from "react";


const BookDetail = props =>{
     if (props.book === null) return <div></div>
     return (

          <div> 
               <h1>Name: {props.book.name}</h1>
               <h3>Author: {props.book.author}</h3>
               <p>Description: {props.book.description}</p>
          </div>
     );
}
export default BookDetail;