import React from 'react';

import styles from './Accordeon.module.scss';
//mui
import { styled } from '@mui/material/styles';
// import Accordion from '@mui/material/Accordion';
import MuiAccordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square={false} {...props} />
))(({ theme }) => ({
  width: '100%',
  border: 'none',//`1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' , color: '#FFFDCD'}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255,175,239,0.1)',
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
  borderRadius: '10px',
  margin: '0.2rem',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    //transform: 'rotate(90deg)',

  },
  '& .MuiAccordionSummary-content': {
    //marginLeft: theme.spacing(1),

  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  // border: 'thin solid rgba(0, 0, 0, .125)',
  borderRadius: '10px',
  backgroundColor: 'rgba(255,175,239,0.025)',
  margin: '0.1rem',
}));

const Accordeon = ({faq}) => {
  return (
    <>
      {
        faq && faq.map(({id, title, body})=>(
          <Accordion key={id} square>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.iconColor}/>}
              aria-controls={`panel${id}a-content`}
              id={`panel${id}`}
            >
              <Typography variant="subtitle" className={styles.title}>{title.toUpperCase()}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" dangerouslySetInnerHTML={{__html: body}}></Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }

    </>
  );
};

export default Accordeon;