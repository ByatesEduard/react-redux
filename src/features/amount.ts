const ADD = "amount/ADD";
const TAKE = "amount/TAKE";
const CLEAR = "amount/CLEAR";

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

const add = (value: number): Addaction => ({
  type: ADD,
  payload: value,
});

const clear = (): Clearaction => ({ type: CLEAR });

const take = (value: number): Takeaction => ({
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

export const actions = { add, take, clear };

export default amountReducer;
