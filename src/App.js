import './App.css';
import About from './MyComponents/About';
import TextForm from './MyComponents/TextForm';
import Navbar from './Navbar';
import React, {useState} from 'react';
import Alert from './MyComponents/Alert';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
         setAlert({
          msg: message,
          type: type
         })
  setTimeout(() => {setAlert(null);}, 1500);
  }
  const toggle = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#222540';
      showAlert("Dark mode is set", "Success")
      //setInterval(()=>{
        //document.title = "Textutils - I am amazing";
      //}, 2000)
      //setInterval(()=>{
      //  document.title = "Textutils - Install me now";
      //}, 1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is set", "Success")
    } 
  }
  const turnBlack = ()=>{
      if(mode==='dark'){
        document.body.style.backgroundColor = 'black';
      showAlert("Black Mode", "Success")
      }
      else{
        showAlert("Please enable dark mode", "Alert")
      }
  }
  const turnGreen = ()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor = 'green';
    showAlert("Green Mode", "Success")
    }
    else{
      showAlert("Please enable dark mode", "Alert")
    }
}
const turnYellow = ()=>{
  if(mode==='dark'){
    document.body.style.backgroundColor = 'yellow';
  showAlert("Yellow Mode", "Success")
  }
  else{
    showAlert("Please enable dark mode", "Alert")
  }
}
  return (
    <> 
    <Router>
      <Navbar title="Text Utils" aboutText="About" mode={mode} toggle={toggle} turnBlack={turnBlack} turnGreen={turnGreen} turnYellow={turnYellow}/>
      <Alert alert={alert}/>
         <div className="container my-3">
            <Routes>
                <Route exact path="/about" element={<About mode={mode}/>} />
                <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />} />
            </Routes>
         </div>
    </Router>  
    </>
  );
}

export default App;