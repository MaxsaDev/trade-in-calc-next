export const getMemoryListByModel = (data, selectedModel) => {
  return Object.keys(data.filter(({model}) => model === selectedModel)[0].memoryPrice);
};


