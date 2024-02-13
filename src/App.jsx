import { Button, ThemeProvider } from '@material-tailwind/react';
import React from 'react'
import { NavbarDefault } from './Components/Navbar/NavbarDefault';


const App = () => {
  return (
    <div className='App'>
        <NavbarDefault/>
        <h1>App</h1>
        <Button>Button Example</Button>
    </div>
  )
}

export default App;