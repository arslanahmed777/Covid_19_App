import React,{useState} from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import InfoPanel from './components/InfoPanel.js'
import FootNav from './components/FootNav.js'

function App() {
  const screenConfig = useState(0);
  return (
    <>
      <NavBar/>
      
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
    </>
  );
}

export default App;
