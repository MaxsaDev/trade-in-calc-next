import React from "react";
import '../styles/globals.css'
import styles from "../styles/Home.module.css";
//next
import Head from "next/head";
// import Head from "next/document";

import Layout from "../components/Layout/Layout";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <div className={styles.container}>
      <Head>
        <title>Trade-In Apple City</title>
        <meta name="description" content="Trade-In Calculator by Apple City"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  </Layout>
)

export default MyApp
