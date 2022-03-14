import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header/Header";
import Link from 'next/link';
import React from "react";

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CalculateIcon from '@mui/icons-material/Calculate';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trade-In Apple City</title>
        <meta name="description" content="Trade-In Calculator by Apple City"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Apple City Trade-In
        </h1>

        <div className={styles.grid}>
          <Link href='/faq'>
            <a className={styles.card}>
              <div className={styles.mxcardimg}>
                <QuestionMarkIcon className={styles.mxcardicon}/>
                <Image src='/maia1.png' width={120} height={152} alt='FAQ'/>
              </div>
              <h2>Часті запитання &rarr;</h2>
              <p>Тут ми зібрали все, що ви питали по Trade-In з нашими відповідями</p>
            </a>
          </Link>

          <Link href='/calculator'>
            <a className={styles.card}>
              <div className={styles.mxcardimg}>
                <CalculateIcon className={styles.mxcardicon + ' ' + styles.mxcardicono} />
                <Image src='/max1.png' width={120} height={152} alt='Calculator' className={styles.cardimg}/>

              </div>
              <h2>Калькулятор &rarr;</h2>
              <p>Самий відвертий калькулятор вартості твого iPhone</p>

            </a>
          </Link>
        </div>
      </main>


    </div>
  )
}
