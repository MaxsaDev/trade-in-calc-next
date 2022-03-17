import React from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import CardPage from "../components/CardPage/CardPage";

const Calculator = () => {
  return (
    <>
      <Head>
        <title>Trade-In Calculator</title>
        <meta name="description" content="Trade-In Калькулятор вартості Apple техніки"/>
      </Head>
      <div className={styles.grid2}>
        <Box
          sx={{
            padding: '5px',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
          }}
        >
          <Box>
            <CardPage
              link={'tel:+380670095577'}
              image='/max3.png'
              title='067 009 55 77'
              description='Давай оцінемо твій пристрій!'
            />
          </Box>
        </Box>

      </div>
    </>
  );
};

export default Calculator;