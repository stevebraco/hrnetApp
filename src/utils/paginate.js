export const paginate = (data, itemsPage = 10) => {
  const itemsPerPage = parseInt(itemsPage);
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const arrayPaginate = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return arrayPaginate;
};

export const showEntries = [10, 25, 50, 100];
