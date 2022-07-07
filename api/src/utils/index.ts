export const getRandomNumber = (maxValue: number) => Math.floor(Math.random() * maxValue);

export const hasDuplicates = <T>(array: Array<T>) => {
  return array.some((item) => array.indexOf(item) !== array.lastIndexOf(item));
};
