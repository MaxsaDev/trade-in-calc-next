import React from 'react';
//next
import Image from 'next/image';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//styles
import styles from './Header.module.scss';


const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Image src='/logo_round.svg' width={30} height={30} alt='Logo Apple City'/>
          <Typography variant="h6" component="div" className={styles.marginLeft}>
            Trade-In Calc
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;