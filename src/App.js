import './App.css';
import { Component } from 'react';

import Books from './components/Books';

class App extends Component {
  /*
  constructor(){
    super()
    this.state = {}
  }
  */
  //Supported in react version 16.4

  state = {
    books:[
      {bookName:"Theory about machine", writer:"Alan Turing"},
      {bookName:"Solution from error.", writer:"Freakman Kalo"},
      {bookName:"Theory about machine", writer:"Michel Hauge"},
    ]
  }

  ChangeBookState = (newBookName)=>{
    this.setState({
      books:[
        {bookName: newBookName, writer:"Alan Turing"},
        {bookName:"Learn from error.", writer:"Raihan Alam"},
        {bookName:"The warefare ", writer:"Michel Hauge"},
      ]
    })
  }

  changeFromInput = (event)=>{
    this.setState({
      books:[
        {bookName: event.target.value, writer:"Alan Turing"},
        {bookName:"Learn from error.", writer:"Raihan Alam"},
        {bookName:"The warefare ", writer:"Michel Hauge"},
      ]
    })

  }

  render(){
    const style1 = {
      color: "Green",
      fontSize:"20px",
      backgroundColor:"black"
      
    }
    return (
      <div className="App">
        <h3 style={style1}>All Books</h3>
        <input type="text" onChange={this.changeFromInput}/>
        <button onClick={()=>this.ChangeBookState("Raihans 1st book")}>Change State</button>
          <Books name={this.state.books[0].bookName} writer={this.state.books[0].writer}/>
          <Books name={this.state.books[1].bookName} writer={this.state.books[1].writer}/>
          <Books name={this.state.books[2].bookName} writer={this.state.books[2].writer}
          change={this.ChangeBookState.bind(this,"Raihans 2nd book")}/>
        
      </div>
    );
  }
}



export default App;
