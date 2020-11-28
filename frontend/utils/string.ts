export const capitalize = (str: string = '') => str[0].toUpperCase() + str.slice(1);

export const repeat = (length: number, str: string) => {
  const res = Array.apply(null, { length }).map(() => str).join(" ");
  console.log(length, str, res);
  return res;
}
  