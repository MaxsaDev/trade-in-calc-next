import React from 'react';
import Link from "next/link";
import styles from "./CardPage.module.scss";
import Image from "next/image";

const CardPage = ({link, icon, image, title, phone, description}) => {
  return (
    <Link href={link}>
      <a className={styles.card}>
          <Image src={image} width={120} height={152} alt={image}/>
        <h2>{title} &rarr;</h2>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default CardPage;