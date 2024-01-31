import './App.css';
import Layout from './components/Layout';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'

import React from 'react';
import Hotels from './components/pages/Hotels';
import Resorts from './components/pages/Resorts';
import CarRentals from './components/pages/CarRentals';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFound from './components/pages/NotFound';
import LoadingPage from './components/Loading';

function App() {
  return<>
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Layout/>}>
              <Route path='/login' element={<Login/>}/>
              <Route path='/login/:id' element={<NotFound/>}/>
              <Route path='/' element={<Hotels/>}/>
              <Route path='/:id' element={<NotFound/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/signup/:id' element={<NotFound/>}/>
              <Route path='/Resorts' element={<Resorts/>}/>
              <Route path='/Loading' element={<LoadingPage/>}/>
              <Route path='/Resorts/:id' element={<NotFound/>}/>
              <Route path='/CarRentals' element={<CarRentals/>}/>
              <Route path='/CarRentals/:id' element={<NotFound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </>
}


export default App;
