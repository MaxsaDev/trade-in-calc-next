import React from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import Calc from "../components/Calc/Calc";
import CardCalcResult from "../components/CardCalcResult/CardCalcResult";
import CardSecondaryPage from "../components/CardSecondaryPage/CardSecondaryPage";
import {getMemoryListByModel} from "../helpers/getMemoryListByModel";
import {getPriceByModelAndMemory} from '../helpers/getPriceByModelAndMemory'
import {getCurrentExchange} from "../helpers/getCurrentExchange";

const Calculator = ({exchange, tradein, modelsList, model, memoryList, memory, price}) => {

  return (
    <>
      <Head>
        <title>Trade-In Calculator</title>
        <meta name="description" content="Trade-In Калькулятор вартості Apple техніки"/>
      </Head>

      <div className={styles.grid2}>
        <Box
          sx={{
            padding: '5px',
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1
          }}
        >
          <Box>
            <Calc
              exchange={exchange}
              tradein = {tradein}
              modelsList = {modelsList}
              model = {model}
              memoryList={memoryList}
              memory={memory}
              price={price}
            />

            <CardSecondaryPage
              link={'tel:+380670095577'}
              image='/max5.png'
              title='067 009 55 77'
              description='Телефонуй, якщо потребуєш уточнення!'
            />
          </Box>
        </Box>

      </div>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const exchangeData = await getCurrentExchange();
    const response = await fetch(`${process.env.API_HOST}/tradein/`);
    const tradeinData = await response.json();
    const modelList = tradeinData.map(item => item.model);
    const initialModel = tradeinData[0].model;
    const initialMemoryList = getMemoryListByModel(tradeinData, initialModel);
    const initialMemory = initialMemoryList[0];
    const initialPrice = getPriceByModelAndMemory(tradeinData, initialModel, initialMemory);


    if (
      !exchangeData ||
      !tradeinData ||
      !modelList ||
      !initialModel ||
      !initialMemoryList ||
      !initialMemory ||
      !initialPrice
    ) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        exchange: exchangeData,
        tradein: tradeinData,
        modelsList: modelList,
        model: initialModel,
        memoryList: initialMemoryList,
        memory: initialMemory,
        price: initialPrice,
      },
    }
  } catch (e) {
    return {
      props: {
        exchange: null,
        tradein: null,
        modelsList: null,
        model: null,
        memoryList: null,
        memory: null,
        price: null,
        },
      }
    }
};

export default Calculator;