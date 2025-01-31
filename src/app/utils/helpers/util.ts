
const chipValuePairs = {
  1: '1',
  10: '10',
  25: '25',
  100: '100',
  250: '250',
  500: '500',
  1000: '1K',
  2000: '2K',
  5000: '5K',
  10000: '10K',
  25000: '25K',
  50000: '50K',
  100000: '100K',
  250000: '250K',
  500000: '500K',
  1000000: '1M',
  2000000: '2M', 
  5000000: '5M',
  10000000: '10M',
};

export const stackChips = (value: number): string[] => {
  console.log('Stacking chips: ', value);
  const chipsToStack = [];

  for (const [k, v] of Object.entries(chipValuePairs).reverse()) {
    const count = Math.floor(value / +k);
    if (count >= 1) {
      for (let i = 0; i < count; i++) {
        chipsToStack.unshift(v);
      }
      value = value % +k;
    }
  }

  const chipsStacked = chipsToStack.slice(
    chipsToStack.length - 25,
    chipsToStack.length
  );

  console.log('chipsStacked: ', chipsStacked);

  return chipsStacked;
};
