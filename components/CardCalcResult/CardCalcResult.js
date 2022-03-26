import React from 'react';
import styles from './CardCalcResult.module.scss';
//next
import Image from 'next/image';
//mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";




const CardCalcResult = ({price= 0, description}) => {
  let image = price < 1 ? '/max4.png' : '/max3.png';
  return (
    <>
      <Box className={styles.card2}>
          <p className={styles.mxcardprice2}>{price}</p>
      </Box>
    </>
  // <Box>
  //   <Box className={styles.card}>
  //     <div className={styles.mxcardmedia}>
  //       <h2 className={styles.mxcardprice}>{price}</h2>
  //       <Image className={styles.mxcardimage} src={image} width={200} height={189} alt={image}/>
  //     </div>
  //     <p className={styles.mxcarddescription}>{description}</p>
  //   </Box>
  // </Box>
  );
};

export default CardCalcResult;