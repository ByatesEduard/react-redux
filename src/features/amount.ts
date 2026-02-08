const ADD = "amount/ADD";
const TAKE = "amount/TAKE";
const CLEAR = "amount/CLEAR";

type AddAmountaction = {
  type: typeof ADD;
  payload: number;
};

type TakeAmountaction = {
  type: typeof TAKE;
  payload: number;
};

type ClearAmountaction = {
  type: typeof CLEAR;
};

type Action = AddAmountaction | TakeAmountaction | ClearAmountaction;

const add = (value: number): AddAmountaction => ({
  type: ADD,
  payload: value,
});

const clear = (): ClearAmountaction => ({ type: CLEAR });

const take = (value: number): TakeAmountaction => ({
  type: TAKE,
  payload: value,
});

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case "amount/ADD":
      return amount + action.payload;

    case "amount/TAKE":
      if (action.payload > amount) {
        return amount;
      }
      return amount - action.payload;

    case "amount/CLEAR":
      return 0;

    default:
      return amount;
  }
};


export const actions = {add, take, clear}

export default amountReducer;
