import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Login from './Login'
import Register from './Register'
import Home from './Home';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default App

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Login from './Login';
// import Register from './Register';
// import Home from './Home';

// function App() {
//   const [currentuser, setcurrentuser] = useState(null);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/login' element={<Login setcurrentuser={setcurrentuser} />} />
//           <Route path='/signup' element={<Register />} />
//           <Route path='/home' element={<Home currentuser={currentuser} />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

