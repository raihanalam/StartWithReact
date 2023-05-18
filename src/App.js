import './App.css';
import React from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter} from 'react-router-dom';



const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </React.StrictMode>
  );
}



export default App;
