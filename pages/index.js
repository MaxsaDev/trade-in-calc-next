import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header/Header";
import Link from 'next/link';
import React from "react";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CalculateIcon from '@mui/icons-material/Calculate';
import Card from "../components/Card/Card";


export default function Home() {
  return (
    <>
     {/*<div className={styles.container}>*/}
     {/* <Head>*/}
     {/*   <title>Trade-In Apple City</title>*/}
     {/*   <meta name="description" content="Trade-In Calculator by Apple City"/>*/}
     {/*   <link rel="icon" href="/favicon.ico"/>*/}
     {/* </Head>*/}

       {/*<main className={styles.main}>*/}
        <h1 className={styles.title}>Apple City Trade-In</h1>

        <div className={styles.grid}>
          <Card
            page='/faq'
            icon={<QuestionMarkIcon />}
            image='/maia1.png'
            title='Відповіді на все'
            description='Тут ми зібрали все, що ви питали по Trade-In з нашими відповідями'
            order='row'
          />

          <Card
            page='/calculator'
            icon={<CalculateIcon />}
            image='/max1.png'
            title='Калькулятор'
            description='Самий відвертий калькулятор вартості твого iPhone'
            order='row-reverse'
          />
        </div>
      {/*</main>*/}
     {/*</div>*/}
    </>
  )
}
