import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Container} from "@mui/material";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
        <Container maxWidth={'md'}>
          {children}
        </Container>
      <Footer/>
    </>
  );
};

export default Layout;