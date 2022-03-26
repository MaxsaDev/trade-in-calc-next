import { getMemoryListByModel } from './getMemoryListByModel';
import { setPriceByModelAndMemory } from './setPriceByModelAndMemory';
export const getMemoryBySelectedModel = (data, selectedModel) => {
  const memoryList = getMemoryListByModel(data, selectedModel);
  setPriceByModelAndMemory(selectedModel, memoryList[0]);
  setMemories(memoryList);
  setMemory(memoryList[0]);
}