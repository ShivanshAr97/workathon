import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Games from './components/Games';
import data from './components/data';
import Jokes from './components/Jokes';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Celebrations from './components/Celebrations';
import Main from './Main';

function App() {
  const [people, setPeople] = useState([data])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/jokes' element={<Jokes people={people}/>} />
        <Route path='/games' element={<Games />} />
        <Route path='/music' element={<Music />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/celebration' element={<Celebrations />} />
      </Routes>
    </>
  );
}

export default App;
