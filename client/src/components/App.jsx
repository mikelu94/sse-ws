import React, { useState } from 'react';
import Navbar from './Navbar';
import Section from './Section';

function App() {
  const [navbarItem, setNavbarItem] = useState('Home');
  return (
    <div className="App">
      <Navbar setNavbarItem={setNavbarItem}/>
      <Section navbarItem={navbarItem}/>
    </div>
  );
}

export default App;
