import React from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
// import SideMenu from "./components/SideMenu";
import NavBar from './components/NavBar';
// import InStockSection from './components/InStockSection';
// import UploadButtons from './components/t';
// import ProductTable from './components/ProductTable';
import MTable from './components/t';
import LineSection from './components/LineSection';
// import { makeStyles } from '@material-ui/styles';
// import NavSideBar from './components/NavSideBar';
import Chart from './components/Chart';
import StyleSheet from './components/StyleSheet'


function App() {

  return (
    <div className="App">      
      <NavBar/>
      {/* <NavSideBar/> */}
      
      <LineSection/>
      {/* <StyleSheet/> */}
      <MTable/>
      <Chart/>
    </div>
  );
}

export default App;
