import React from 'react';
import Link from "next/link";
import styles from "./Card.module.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Image from "next/image";

const Card = ({page, }) => {
  return (
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
  );
};

export default Card;