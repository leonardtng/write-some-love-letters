export const toTitleCase = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};
