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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
    {...props}
  />
))(({theme}) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'var(--purple)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  // padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  '& p': {
    fontSize: '0.8rem',
    padding: '0 0.5rem'
  },

}));




const Faq = () => {
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
      image='/maia2.png'
      title='067 009 55 77'
      description=''
    />

  </Box>
        <Box
          // sx={{border:'3px solid red'}}
        >
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Оцінка калькулятора - остаточна?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ми постійно удосконалюємо алгоритм розрахунку нашого Trade-In калькулятора, щоб він був точнішим за
                гідрометцентр, проте його оцінка лише попередня.<br/><br/>
                Реальна оцінка ставиться нашими експертами з Trade-In. Ось вони точно знають скільки коштують ваші
                пристрої.<br/><br/>
                Керуючись внутрішнім переконанням і хизуючись дипломами з відзнаками, експерти з Trade-In підходять до
                цього дуже відповідально, з холодним розумом та гарячим серцем.<br/><br/>
                Отже оцінка може бути, як вищою за ту, що порахував Trade-In калькулятор, так і навпаки.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Які документи потрібні для обміну?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Формули ДНК та відбитків вказівних пальців, здавалося б, цілком достатньо, але натомість ми перевіряємо
                тільки документи, які засвідчують особу:<br/><br/>
                - паспорт громадянина України;<br/>
                - паспорт громадянина України для виїзду за кордон;<br/>
                - посвідка на постійне проживання;<br/>
                - посвідчення водія;<br/>
                - ідентифікаційний номер;<br/>
                - атестат за 8-й клас (але це не точно).
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Чи можу я обміняти телефон в розстрочку?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Немає жодних проблем! Розстрочка оформлюється в звичайний спосіб, а сума оцінки вашого пристрою
                виступатиме або "першим внеском", або його частиною.<br/><br/>
                Отже після погодження, розглядайте свій телефон, як повноцінний грошовий еквівалент, до якого ви, при
                потребі, можете додати бажану суму:<br/>
                - або готівкою,<br/>
                - або з банківської картки,<br/>
                - або гречкою (хоча напевно з цим поки ні).<br/>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>Чи можу я отримати гроші за свій пристрій не купуючи новий товар?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Раніше ми давали за старі моделі старі гроші, але потім все витратили на Біткоїни і зараз оплачуємо
                тільки натур-продуктами.<br/><br/>
                Тому розцінювати програму Trade In, як можливість продати вживану техніку - не варто.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography>Які пристрої можна здати по Trade In?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                У програмі обміну беруть участь:<br/>
                - мобільні телефони<br/>
                - планшети<br/>
                - смарт годинники<br/>
                - ноутбуки<br/>
                - Apple iMac/Mac Mini<br/>
                - ігрові приставки<br/>
                - акції Tesla (це ще не затверджено, але майте на увазі)<br/>
                <br/>
                Щоб провести оцінку пристрою він повинен вмикатися, а стан екрану мав би дозволяти провести повну
                діагностику всіх функцій.<br/>
                Фотки та приватне відео видаляйте за бажанням, але у нас завжди є попкорн.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography>Який товар я можу купити зі знижкою за програмою Trade In?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Придбати можна будь-який товар, який доступний на сайті або в магазинах мережі "Apple City", все все, крім обідніх лоточків наших експертів з Trade-In
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography>Яку максимальну знижку я можу отримати при обміні?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Тут немає особливих правил, ми залишили цей пункт для загального феншуй-вигляду сторінки.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
              <Typography>Скільки пристроїв можна здати за програмою обміну?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Кількість пристроїв не обмежується, тому ви можете приносити нам все що вдастся принести, ми ніколи не
                питаємо звідки ви це взяли, просто ведемо таємну відеозйомку, щоб передати її куди треба (жартуємо... ми
                нікуди її не передаємо...).
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
              <Typography>Що робити, якщо я не можу знайти свою модель на сайті?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Зазвичай з цим проблем не виникає.<br/>
                Якщо те, що ви хочете, продається у нас, знайти його дуже просто.<br/>
                Набираєте (067) 009 55 77 і експерти пошуку "того що треба" - вже на низькому старті та готові вам
                допомогти.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
              <Typography>Що таке Trade In?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Раніше ми всім говорили, що Trade-In придумали тут в Apple City, але потім, хлопці з Купертіно, написали
                на свому сайті, що це придумали вони і всі їм повірили.<br/>
                А це дуже проста програма - берете свій старий iPhone, приносите в Apple City, оцінюєте його в шалену
                суму і купляєте новий гаджет набагато дешевше.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
              <Typography>Що впливає на оціночну вартість б/в пристроїв?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                - модель пристрою<br/>
                - зовнішній стан<br/>
                - технічний стан<br/>
                - наявність заводської упаковки і аксесуарів<br/>
                - хлопцям більше подобаються блондинки, а дівчатам брутальні мени... Кажуть це коливає вартість в межах
                +/-5%, але все одно приходить шеф і вам порахують по правилах
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
</Paper>

      </div>
    </>
  );
};

export default Faq;