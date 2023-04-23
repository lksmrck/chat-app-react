export const getTime = (date: Date | string) => {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
};

//Shortering the string name. If the string is longer than letters parameter, it will be shortened and "..." wil be included.

export const stringGuard = (name: string, letters: number) => {
  if (name.length < letters) return name;
  const shortName = `${name.slice(0, letters)}...`;
  return shortName;
};

export const generateID = () => {
  return Math.random()
    .toString(36)
    .substring(2, 10 + 2);
};
