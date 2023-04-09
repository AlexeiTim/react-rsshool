export const getCapitalizedString = (str: string): string => {
  return str
    .split('')
    .map((item, index) => (index == 0 ? item.toUpperCase() : item.toLowerCase()))
    .join('');
};
