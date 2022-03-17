import React from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://maxsa.com.ua"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        Maxsa & Good Job Space{', '}
        {/*<span className={styles.logo}>*/}
        {/*  <Image src="/logo_maxsa.svg" alt="Maxsa Logo" width={70} height={19}/>*/}
        {/*</span>{' '}*/}
        {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;