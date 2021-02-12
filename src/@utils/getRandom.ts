export const getRandom = (arr: Array<string>): string => {
  return arr[Math.floor(Math.random() * arr.length)]
};
