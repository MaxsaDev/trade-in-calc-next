import React from 'react';
import styles from './Card.module.scss';
//next
import Link from 'next/link';
import Image from 'next/image';
//mui
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';




const Card = ({page, icon, image, title, description, order}) => {
  return (
    <Link href={page}>
      <a className={styles.card}>
        <div className={styles.mxcardimg} style={{flexDirection: order}}>
          <div className={styles.mxcardicon}>{icon}</div>
          <Image src={image} width={120} height={152} alt={image}/>
        </div>
        <h2>{title} &rarr;</h2>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default Card;