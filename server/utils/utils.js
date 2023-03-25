export const generateID = () => {
  return Math.random()
    .toString(36)
    .substring(2, 10 + 2);
};
