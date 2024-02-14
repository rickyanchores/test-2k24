import { Button, ThemeProvider } from '@material-tailwind/react';
import React from 'react'
import { NavbarDefault } from './Components/Navbar/NavbarDefault';
import { CardDefault } from './Components/Card/CardDefault';
import { CardLink } from './Components/CardLink/CardLink';


const App = () => {
  return (
    <div className='App'>
        <NavbarDefault/>
        <h1>App</h1>
        <CardDefault />
        <CardLink />
    </div>
  )
}

export default App;