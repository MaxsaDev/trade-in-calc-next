
export const getCurrentExchange = async () => {
  let exchangeValue = 0;
  let response;
  response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
  if(response){
    exchangeValue = await response.json();
    if(exchangeValue) {
      const exchangePrivatbank = exchangeValue.find((item) => 'ccy' in item && item.ccy === 'USD');
      if (exchangePrivatbank && 'sale' in exchangePrivatbank) {
        return exchangePrivatbank.sale;
      }
    }
  }
  response = await fetch(`${process.env.API_HOST}/exchange/`);
  exchangeValue = await response.json();
  return exchangeValue[0].usdSale;
};
