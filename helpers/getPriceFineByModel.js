export const getPriceFineByModel = (data, selectedModel, fineItem) => {
  return data.filter(({model}) => model === selectedModel)[0].fine[fineItem];
}