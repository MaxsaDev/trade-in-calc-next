import React from 'react';
import styles from "../styles/Home.module.css";
//next
import Head from "next/head";
//mui
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import CardPage from "../components/CardPage/CardPage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import {Paper} from "@mui/material";
import Card from "../components/Card/Card";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Accordeon from "../components/Accordeon/Accordeon";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({theme}) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&:before': {
//     display: 'none',
//   },
// }));
//
// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
//     {...props}
//   />
// ))(({theme}) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(183, 139, 243, .6)',//'var(--purple)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));
//
// const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
//   '& p': {
//     fontSize: '0.8rem',
//     padding: '0 0.5rem'
//   },
//
// }));




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
<Paper
sx={{
  padding: '10px',
  margin: '10px'
}}
>
  <Box>
    <CardPage
      link={'tel:+380670095577'}
      image='/maia3.png'
      title='067 009 55 77'
      description='Не знайшов відповіді? Телефонуй!'
    />

  </Box>
  <Accordeon faq={faq}/>
</Paper>

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
  }catch(e){
    return {
      props: {faq: null},
    }
  }
};


export default Faq;