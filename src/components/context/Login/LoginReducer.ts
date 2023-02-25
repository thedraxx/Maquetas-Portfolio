import { LoginState } from "./LoginProvider";

type LoginActionType =
  | { type: "[Login] - LoginAction" }
  | { type: "[Login] - LogoutAction" };

export const LoginReducer = (
  state: LoginState,
  action: LoginActionType
): LoginState => {
  switch (action.type) {
    case "[Login] - LoginAction":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "[Login] - LogoutAction":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
