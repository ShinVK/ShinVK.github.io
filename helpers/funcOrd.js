function asc(a, b) {
  if (a < b) return +'-1';
  if (a > b) return 1;
  return 0;
}

function dsc(a, b) {
  if (a < b) return 1;
  if (a > b) return +'-1';
  return 0;
}

const sortObj = (arr, par, sort = 'ASC') => {
  if (sort === 'ASC') {
    arr.sort(asc(a[par], b[par]));
  }
  if (sort === 'DSC') {
    arr.sort(dsc(a[par], b[par]));
  }
};

export default sortObj;
