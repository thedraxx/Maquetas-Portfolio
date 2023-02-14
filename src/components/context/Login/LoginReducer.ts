import { LoginState } from "./LoginProvider";

type LoginActionType = { type: "[Login] - LoginAction" };

export const LoginReducer = (
  state: LoginState,
  action: LoginActionType
): LoginState => {
  switch (action.type) {
    case "[Login] - LoginAction":
      return {
        ...state,
      };

    default:
      return state;
  }
};
