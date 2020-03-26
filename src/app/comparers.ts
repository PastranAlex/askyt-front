export const comparerByDate = (order: 'DESC' | 'ASC', property?: string) => (
  a,
  b
) => {
  if (
    new Date(property ? a[property] : a) > new Date(property ? b[property] : b)
  ) {
    return order === 'DESC' ? -1 : 1;
  }
  if (
    new Date(property ? a[property] : a) < new Date(property ? b[property] : b)
  ) {
    return order === 'DESC' ? 1 : -1;
  }
  return 0;
};

export const comparerByAlphabet = (
  order: 'DESC' | 'ASC',
  property?: string
) => (a, b) => {
  if (order === 'ASC') {
    return property
      ? a[property].localeCompare(b[property])
      : a.localeCompare(b);
  } else {
    return property
      ? b[property].localeCompare(a[property])
      : b.localeCompare(a);
  }
};

export const comparerByNumber = (order: 'DESC' | 'ASC', property?: string) => (
  a,
  b
) => {
  if (order === 'ASC') {
    return property ? a[property] - b[property] : a - b;
  } else {
    return property ? b[property] - a[property] : b - a;
  }
};
