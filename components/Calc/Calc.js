import React, {useState} from 'react';
import styled from './Calc.module.scss'
import {
  Checkbox,
  FormControl,
  FormControlLabel, FormGroup, FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import {getPriceByModelAndMemory} from "../../helpers/getPriceByModelAndMemory";
import {getMemoryListByModel} from "../../helpers/getMemoryListByModel";
import CardCalcResult from "../CardCalcResult/CardCalcResult";
import {getPriceServiceByModel} from "../../helpers/getPriceServiceByModel";
import {getPriceFineByModel} from "../../helpers/getPriceFineByModel";

const Calc = ({exchange, tradein, modelsList, model, memoryList, memory, price}) => {

  const [selectedModel, setSelectedModel] = useState(model);
  const [selectedMemory, setSelectedMemory] = useState(memory);
  const [currentMemoryList, setCurrentMemoryList] = useState(memoryList);
  const [priceValue, setPriceValue] = useState(getPriceByModelAndMemory(tradein, model, memory));

  const [batteryOriginal, setBatteryOriginal] = useState(0);
  const [displayOriginal, setDisplayOriginal] = useState(0);
  const [body, setBody] = useState(0);
  const [fineRepair, setFineRepair] = useState(0);
  const [fineScratch, setFineScratch] = useState(0);

  const [batteryOriginalState, setBatteryOriginalState] = useState(false);
  const [displayOriginalState, setDisplayOriginalState] = useState(false);
  const [bodyState, setBodyState] = useState(false);
  const [fineRepairState, setFineRepairState] = useState(false);
  const [fineScratchState, setFineScratchState] = useState(false);

  const getCalculatePrice = () => {
    const resultPrice =  Math.trunc(
      (priceValue * exchange) -
      ((priceValue * exchange) * fineRepair) -
      ((priceValue * exchange) * fineScratch) -
      batteryOriginal -
      displayOriginal -
      body
    );
    return resultPrice > 0
      ?  resultPrice + '₴'
      :  '0,00 :('
  }

  const setFineZero = () => {
    setBatteryOriginalState(false);
    setDisplayOriginalState(false);
    setBodyState(false)
    setFineRepairState(false);
    setFineScratchState(false);

    setBatteryOriginal(0);
    setDisplayOriginal(0);
    setBody(0)
    setFineRepair(0);
    setFineScratch(0);
  }



  const handleChangeModel = (e) => {
    const {value} = e.target;
    setSelectedModel(value);
    const newMemoryList = getMemoryListByModel(tradein, value);
    setCurrentMemoryList(newMemoryList);
    setSelectedMemory(newMemoryList[0]);
    const price = getPriceByModelAndMemory(tradein, value, newMemoryList[0]);
    setPriceValue(price);
    setFineZero();
  }

  const handleChangeMemory = (e) => {
    const {value} = e.target;
    setSelectedMemory(value);
    const price = getPriceByModelAndMemory(tradein, selectedModel, value);
    setPriceValue(price);
    setFineZero();
  }

  const handleChangeBatteryOriginalState = () => {
    setBatteryOriginalState(!batteryOriginalState);
    !batteryOriginalState
      ? setBatteryOriginalByModel(selectedModel)
      : setBatteryOriginal(0);
  }
  const setBatteryOriginalByModel = (model) => {
    const value = getBatteryOriginal(model);
    setBatteryOriginal(value);
  }
  const getBatteryOriginal = (model) => {
    return getPriceServiceByModel(tradein, model, 'batteryOriginal');
  }


  const handleChangeDisplayOriginalState = () => {
    setDisplayOriginalState(!displayOriginalState);
    !displayOriginalState
      ? setDisplayOriginalByModel(selectedModel)
      : setDisplayOriginal(0);
  }
  const setDisplayOriginalByModel = (model) => {
    const value = getDisplayOriginal(model);
    setDisplayOriginal(value);
  }
  const getDisplayOriginal = (model) => {
    return getPriceServiceByModel(tradein, model, 'displayOriginal');
  }


  const handleChangeBodyState = () => {
    setBodyState(!bodyState);
    !bodyState
      ? setBodyByModel(selectedModel)
      : setBody(0);
  }
  const setBodyByModel = (model) => {
    const value = getBody(model);
    setBody(value);
  }
  const getBody = (model) => {
    return getPriceServiceByModel(tradein, model, 'body');
  }


  const handleChangeFineRepairState = () => {
    setFineRepairState(!fineRepairState);
    !fineRepairState
      ? setFineRepairByModel(selectedModel)
      : setFineRepair(0);
  }
  const setFineRepairByModel = (model) => {
    const value = getFineRepair(model);
    setFineRepair(value);
  }
  const getFineRepair = (model) => {
    return getPriceFineByModel(tradein, model, 'fineRepair');
  }


  const handleChangeFineScratchState = () => {
    setFineScratchState(!fineScratchState);
    !fineScratchState
      ? setFineScratchByModel(selectedModel)
      : setFineScratch(0);
  }
  const setFineScratchByModel = (model) => {
    const value = getFineScratch(model);
    setFineScratch(value);
  }
  const getFineScratch = (model) => {
    return getPriceFineByModel(tradein, model, 'fineScratch');
  }


  return (
    <>

      <CardCalcResult
        price = {getCalculatePrice()}
        // link = {'tel:+380670095577'}
        // image = '/max3.png'
        // title = '067 009 55 77'
        // description ={`Давай за: ${priceValue}`}
      />

      <FormControl variant="standard" fullWidth>
        <InputLabel id="label-model">Модель</InputLabel>
        <Select

          labelId="label-model"
          id="id-model"
          name={'selectedModel'}
          value={selectedModel}
          label="Телефон"
          onChange={handleChangeModel}
          sx={{
            fontSize: '1.8rem',
            mb: '1.5rem'
          }}
        >
          {modelsList && modelsList.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <InputLabel id="label-memory">Пам'ять</InputLabel>
        <Select
          labelId="label-memory"
          id="id-memory"
          name={'selectedMemory'}
          value={selectedMemory}
          label="Об\'єм"
          onChange={handleChangeMemory}
          sx={{
            fontSize: '1.8rem',
            mb: '1.5rem',
          }}
        >
          {
            currentMemoryList
              ? currentMemoryList.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
              : [].map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
          }

        </Select>
      </FormControl>

      <FormControl component="fieldset" variant="standard">
        <FormLabel
          component="legend"
          sx={{color: 'var(--pink)'}}
        >
          В процесі експлуатації:</FormLabel>
        <FormGroup
          sx={{
            mb: '1.5rem'
          }}
        >
          <FormControlLabel
            sx={{color: 'var(--purple)'}}
            control={
              <Checkbox
                name={'batteryOriginalState'}
                checked={batteryOriginalState}
                onChange={handleChangeBatteryOriginalState}
                sx={{
                  color: 'var(--pink)',
                  '&.Mui-checked':{
                    color: 'var(--purple)'
                  }
                }}
              />

            }
            label="ємність батареї < 87%"
          />
          <FormControlLabel
            sx={{color: 'var(--purple)'}}
            control={
              <Checkbox
                name={'displayOriginalState'}
                checked={displayOriginalState}
                onChange={handleChangeDisplayOriginalState}
                sx={{
                  color: 'var(--pink)',
                  '&.Mui-checked':{
                    color: 'var(--purple)'
                  }
                }}
              />
            }
            label="тріснутий дисплей"
          />
          <FormControlLabel
            sx={{color: 'var(--purple)'}}
            control={
              <Checkbox
                name={'bodyState'}
                checked={bodyState}
                onChange={handleChangeBodyState}
                sx={{
                  color: 'var(--pink)',
                  '&.Mui-checked':{
                    color: 'var(--purple)'
                  }
                }}
              />
            }
            label="пошкоджений корпус"
          />
          <FormControlLabel
            sx={{color: 'var(--purple)'}}
            control={
              <Checkbox
                name={'fineRepairState'}
                checked={fineRepairState}
                onChange={handleChangeFineRepairState}
                sx={{
                  color: 'var(--pink)',
                  '&.Mui-checked':{
                    color: 'var(--purple)'
                  }
                }}
              />
            }
            label="вже проводився ремонт"
          />
          <FormControlLabel
            sx={{color: 'var(--purple)'}}s
            control={
              <Checkbox
                name={'fineScratchState'}
                checked={fineScratchState}
                onChange={handleChangeFineScratchState}
                sx={{
                  color: 'var(--pink)',
                  '&.Mui-checked':{
                    color: 'var(--purple)'
                  }
                }}
              />
            }
            label="подряпини на корпусі/екрані"
          />
        </FormGroup>
      </FormControl>

    </>
  );
};



export default Calc;