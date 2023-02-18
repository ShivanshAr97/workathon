import React from 'react'
import Games from './components/Games';
import Jokes from './components/Jokes';
import Music from './components/Music';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
    <Jokes/>
    <Games/>
    {/* <Music/> */}
    {/* <Skills/> */}
    </>
  );
}

export default App;
