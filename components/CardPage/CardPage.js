import React from 'react';
import styles from "./CardPage.module.scss";
//next
import Link from "next/link";
import Image from "next/image";

const CardPage = ({link, image, title, description}) => {
  return (
    <Link href={link}>
      <a className={styles.card}>
        <div>
          <Image src={image} width={200} height={189} alt={image}/>
        </div>
          <p className={styles.mxphoneSubtitle}>{description}</p>
          <h2 className={styles.mxcardTitle}>{title}</h2>
      </a>
    </Link>
  );
};

export default CardPage;