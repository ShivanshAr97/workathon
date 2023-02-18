import React, { useState } from 'react'
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
    <Navbar/>
    <Main/>
    {/* <Jokes people={people}/> */}
    {/* <Games/> */}
    {/* <Music/> */}
    {/* <Skills/> */}
    {/* <Celebrations/>  */}
    </>
  );
}

export default App;
