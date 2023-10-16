export const checkIfItemExists = (id, array) =>
  array.findIndex(item => item.id === id);
