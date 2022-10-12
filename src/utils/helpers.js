export const changeNameKeys = (array) =>
  array.map(({ name: label, abbreviation: value }) => ({
    label,
    value,
  }));
