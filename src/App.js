import React, {useState}from 'react'
import './App.css';
import{ BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Productpage from './Components/ProductPage/Productpage'
import Cartcontent from './Components/CartContent/Cartcontent';
import Preview from './Components/Preview/Preview';

function App() {
  const [itemCount, setItemCount] = useState(0);

    const resetCounter = () => {
        setItemCount(0);
    };
  return (
    <Router>
      <Navbar  reset={resetCounter} counter={setItemCount} count={itemCount}>
        <Cartcontent reset={resetCounter} count={itemCount} />
      </Navbar>
      <Productpage counter={setItemCount} count={itemCount} />
      {/* <Preview /> */}
      
    </Router>
  );
}

export default App;
