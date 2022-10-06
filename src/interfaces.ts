export interface IProducts {
  id: string;
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
}
