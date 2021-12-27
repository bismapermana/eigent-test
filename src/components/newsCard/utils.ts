export const localDate = (date: string): string => {
  const convert = new Date(date).toLocaleDateString();
  return convert;
};
