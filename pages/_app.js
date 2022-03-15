import React from "react";
import '../styles/globals.css'
import styles from "../styles/Home.module.css";
//next
import Head from "next/head";

import Layout from "../components/Layout/Layout";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <div className={styles.container}>
      <Head>
        <title>Trade-In Apple City</title>
        <meta name="description" content="Trade-In Calculator by Apple City"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  </Layout>
)

export default MyApp
