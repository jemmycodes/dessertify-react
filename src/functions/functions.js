export const checkIfItemExists = (id, array) =>
  array.findIndex(item => item.id === id);

export const filterArray = (array, searchInput) =>
  searchInput
    ? array.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : array;

    