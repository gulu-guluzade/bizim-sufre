export interface ITotalValuePer100gr {
  fat: string;
  protein: string;
  carbohydrate: string;
  energy: string;
  innerPiece: string;
}

export interface IProducts {
  id: string;
  title: string;
  imgSrc: string;
  desc: string;
  ingredients: string;
  totalWeight: string;
  totalValuePer100gr: ITotalValuePer100gr;
  note: string;
}
