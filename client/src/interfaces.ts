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
  saled: boolean;
  originalPrice: number;
  _id?: string;
  userId?: string;
  discountPrice?: number;
}
