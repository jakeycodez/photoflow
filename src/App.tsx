import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import SignUp from './pages/SignUp';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import CreateGallery from './components/CreateGallery';

const App = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path='/create' element={<CreateGallery />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
