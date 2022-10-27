export interface IProducts {
  title: string;
  brand: string;
  price: number;
  img: string;
  listImg: string[];
  spec: {
    rate: string;
    type: string;
    dpType: string;
    ssd: string;
  };
  amount: number;
  inStock: boolean;
  basedPrice: number;
  id?: string;
  discountPrice?: number;
  saledInPercent: number;
  saled: boolean;
  originPrice: number;
}
