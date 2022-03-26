import React from 'react';
//next
import Image from 'next/image';
import Link from "next/link";
import {useRouter} from "next/router";

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//styles
import styles from './Header.module.scss';


const Header = () => {
  const {pathname} = useRouter();

  return (
    <>
      <Box sx={{
        flexGrow: 1,
        // border: '1px solid red',
        background: 'linear-gradient(180deg, rgba(183,139,243,1) 0%, rgba(255,175,239,1) 35%, rgba(255,175,239,0) 100%);',
        // backgroundColor: 'var(--pink)',
        padding: '1rem 1rem 1.5rem 1rem',
        // color: 'var(--purple)',
        color: 'purple',
        display: 'flex',
      }}>

            <Link href='/'>
              <a><Image src='/logo_round.svg' width={30} height={30} alt='Logo Apple City'/></a>
            </Link>
            <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: '20px'}}>
              <Link href='/'><a>Trade-In Calc</a></Link>
            </Typography>
            {
              pathname !== '/' &&
              <Link href={pathname === '/faq' ? '/calculator' : '/faq'}>
                <Button
                sx={{fontSize: '0.7rem'}}
                  color="inherit">{pathname === '/faq' ? 'Калькулятор' : 'Відповіді на все'}</Button>
              </Link>
            }
      </Box>
    </>
    // <Box sx={{flexGrow: 1}}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Link href='/'>
    //         <a><Image src='/logo_round.svg' width={30} height={30} alt='Logo Apple City'/></a>
    //       </Link>
    //       <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: '20px'}}>
    //         <Link href='/'><a>Trade-In Calc</a></Link>
    //       </Typography>
    //       {
    //         pathname !== '/' &&
    //         <Link href={pathname === '/faq' ? '/calculator' : '/faq'}>
    //           <Button color="inherit">{pathname === '/faq' ? 'Калькулятор' : 'Відповіді на все'}</Button>
    //         </Link>
    //       }
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Header;