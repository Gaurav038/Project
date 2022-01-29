import './App.css';
import AddUser from './Component/AddUser';
import AllUsers from './Component/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import EditUser from './Component/EditUser';
import MobileUser from './Component/MobileUser';
import { useEffect, useState } from 'react';


function App() {
  const [width, setWidth] = useState(window.screen.width);
  const [mobile, setMobile] = useState(false);

  const actualWidth = () => {
    setWidth(window.innerWidth)
    if(width<800){
      setMobile(true)
    }
    else{
      setMobile(false)
    }
  }
    
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    return ()=>{
      window.removeEventListener("resize", actualWidth);
    }
  });
   

    console.log(width)
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={mobile? <MobileUser /> : <AllUsers />}/>
          <Route exact path="/add" element={<AddUser />}/>
          <Route exact path="/edit/:id" element={<EditUser />}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
