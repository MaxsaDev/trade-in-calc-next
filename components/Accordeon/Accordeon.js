import React from 'react';

import styles from './Accordeon.module.scss';
//mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Accordeon = ({faq}) => {
  return (
    <>
      {
        faq && faq.map(({id, title, body})=>(
          <Accordion key={id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${id}a-content`}
              id={`panel${id}`}
            >
              <Typography variant="subtitle" className={styles.title}>{title}</Typography>
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