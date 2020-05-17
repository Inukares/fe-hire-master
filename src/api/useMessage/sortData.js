import { round } from '../../utils/round';

export const sortData = (data) => {
  const precision = 3;
  const scale = 1000;
  return data.sort(
    (a, b) => scale * round(b[0], precision) - scale * round(a[0], precision)
  );
};
