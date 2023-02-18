import React, { useState } from 'react'
import Games from './components/Games';
import data from './components/data';
import Jokes from './components/Jokes';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Celebrations from './components/Celebrations';

function App() {
  const [people, setPeople] = useState([data])
  return (
    <>
    <Navbar/>
    {/* <Jokes people={people}/> */}
    {/* <Games/> */}
    <Music/>
    <Skills/>
    {/* <Celebrations/>  */}
    </>
  );
}

export default App;
