import './style.css';
import './App.css';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import About from './components/About';

function App() { // function based component
  const [mode,setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = ()=>{
    // const value = document.getElementById('modeB').value
    // console.log(value)

    if(mode === 'dark'){
      setMode('light')
      document.body.style.background = 'white'
      console.log(mode)
      showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark')
      document.body.style.background = '#1e2956'
      console.log(mode)
      showAlert("Dark mode has been enabled","success")
    }

    // if(value === 'light'){
    //   setMode('dark')
    //   document.body.style.background = '#1e2956'
    //   console.log(mode)
    //   showAlert("Dark mode has been enabled","success")
    // }
    // else if(value === 'hakur'){
    //   setMode('hakur')
    //   document.body.style.background = 'green'
    //   console.log(mode)
    //   showAlert("hacker mode is enable now","success")
    // }
    // else{
    //   setMode('dark')
    //   document.body.style.background = 'white'
    //   console.log(mode)
    //   showAlert("Light mode has been enabled","success")
    // }

    }
  
    return (
    <>
      <Navbar title="textUtils" aboutText="This is about" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar aboutText="This is about"/> */}
      {/* <Navbar/> */}
      <div className="container">
        <TextForm formTitle="Enter text to analyze below" mode={mode} showAlert = {showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
