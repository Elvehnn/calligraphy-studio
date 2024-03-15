export const mappedByOption = (array: Array<AnyObject>, option: string) => {
  array.map((item) => item[option]);
};
