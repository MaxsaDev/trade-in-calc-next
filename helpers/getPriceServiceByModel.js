export const getPriceServiceByModel = (data, selectedModel, serviceItem) => {
  return data.filter(({model}) => model === selectedModel)[0].service[serviceItem];
}