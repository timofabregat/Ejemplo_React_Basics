import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useReducer} from "react";



export default function ButtonAppBar() {

  const [ignored, forceUpdate] = useReducer(x => x+1, 0);

  function refreshPage(){
    window.location.reload(false);
  }

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background: '#002984'}}>
          <Toolbar >
            <Button className='homebutton'>
              <Link to='/' reloadDocument><img className = 'photo' src={logo} alt='Logo'/></Link>
            </Button>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <ul className='nav-list'>
                  <li><Link to='/pricing' reloadDocument style={{color:'white'}}>Pricing</Link></li>
                  <li><Link to='/about' reloadDocument style={{color:'white'}}>About</Link></li>
                  <li><Link to='/contact' reloadDocument style={{color:'white'}}>Contact</Link></li>
                </ul>
              </Typography>


          </Toolbar>
        </AppBar>

      </Box>
    </Router>
  );
}