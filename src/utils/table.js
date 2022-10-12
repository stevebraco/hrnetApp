export const headers = [
  'firstName',
  'lastName',
  'startDate',
  'department',
  'dateOfBirth',
  'street',
  'city',
  'state',
  'zipCode',
];

export const filterEmployees = (listEmployees, search) => {
  return listEmployees.filter((list) => {
    return headers.some((_, idx) => {
      return list[headers[idx]].toLowerCase().includes(search);
    });
  });
};
