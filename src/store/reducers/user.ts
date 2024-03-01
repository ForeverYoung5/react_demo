import { IAction } from "..";

const initState = {
  name: 'jerry',
  age: 18,
  job: 'Fe engineer'
}
const userReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...state, age: state.age + 1 };
    default:
      return state
  }
};

export default userReducer;