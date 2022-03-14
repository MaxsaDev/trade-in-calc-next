import Head from 'next/head';
import '../styles/globals.css'
import Layout from "../components/Layout/Layout";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
