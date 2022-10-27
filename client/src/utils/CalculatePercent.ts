export const SALE_IN_PERCENT = 20;

export const CalculatePercent = (price: number): number => {
  return Math.floor(price - (price * SALE_IN_PERCENT) / 100);
};
