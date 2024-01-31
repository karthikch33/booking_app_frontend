import './App.css';
import Layout from './components/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'

import React from 'react';
import Home from './components/pages/Home';
import Hotels from './components/pages/Hotels';
import Resorts from './components/pages/Resorts';
import CarRentals from './components/pages/CarRentals';
import Login from './components/pages/Login';

function App() {
  return<>
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Layout/>}>
              <Route index element={<Login/>}/>
              <Route path='/hotels' element={<Hotels/>}/>
              <Route path='/Resorts' element={<Resorts/>}/>
              <Route path='/CarRentals' element={<CarRentals/>}/>
              <Route path='/hotels' element={<Hotels/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </>
}


export default App;
