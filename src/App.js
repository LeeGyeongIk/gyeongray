import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Main from './Component/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// let AronaBG = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-image: url(${Arona});
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `
// let BlueArchive = styled.div`
//   text-align: center;
//   color: red;
// `

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Main" element={<Main />} />
    </Routes>
  );
}

export default App;
