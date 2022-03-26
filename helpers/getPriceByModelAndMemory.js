export const getPriceByModelAndMemory = (data, model, memory) => {
    return data.filter((item) => item.model === model)[0].memoryPrice[memory];
}