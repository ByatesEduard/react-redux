const ADD = "goods/ADD";
const TAKE = "goods/TAKE";
const CLEAR = "goods/CLEAR";

type Addaction = {
  type: "amount/ADD";
  payload: number;
};

type Takeaction = {
  type: "amount/TAKE";
  payload: number;
};

type Clearaction = {
  type: "amount/CLEAR";
};

type Action = Addaction | Takeaction | Clearaction;

const add = (goods: string): Addaction => ({
  type: ADD,
  payload: goods,
});

const clear = (): Clearaction => ({ type: CLEAR });

const take = (goods:string): Takeaction => ({
  type: TAKE,
  payload: goods,
});

export const actions ={ add, take, clear };

const goodsReducer = (goods: string[] = [], action : Action) => {
  switch (action.type) {
    case 'goods/ADD':
      return [...goods, action.payload];
      case 'goods/TAKE':
      return goods.filter(good => good !== action.payload);
      case 'goods/CLEAR':
      return [];
      


    default:      
    return goods;

  }
  
};

export default goodsReducer;
