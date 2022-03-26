import React from 'react';
import styles from "../styles/Home.module.css";
import Accordeon from "../components/Accordeon/Accordeon";
import CardSecondaryPage from "../components/CardSecondaryPage/CardSecondaryPage";
//next
import Head from "next/head";
//mui
import Box from "@mui/material/Box";

const Faq = ({faq}) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Head>
        <title>Trade-In FAQ</title>
        <meta name="description" content="Trade-In Часті запитання"/>
      </Head>
      {/*<div className={styles.grid}>*/}
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
            <CardSecondaryPage
              link={'tel:+380670095577'}
              image='/maia3.png'
              title='067 009 55 77'
              description='Не знайшов відповіді? Телефонуй!'
            />
          </Box>
          <Accordeon faq={faq}/>
        </Box>

      </div>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/faq/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {faq: data},
    }
  } catch (e) {
    return {
      props: {faq: null},
    }
  }
};


export default Faq;