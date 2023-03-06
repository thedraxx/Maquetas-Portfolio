import { UploadState } from "./";

type UploadActionType =
  | { type: "[Upload] - isValidPressButton" }
  | { type: "[Upload] - AddFile"; payload: string }
  | { type: "[Upload] - Loading"; payload: boolean }
  | { type: "[Upload] - ClearProyect" }
  | { type: "[Upload] - ClearArrayImages" };

export const UploadReducer = (
  state: UploadState,
  action: UploadActionType
): UploadState => {
  switch (action.type) {
    case "[Upload] - Loading":
      return {
        ...state,
        isValid: action.payload,
      };

    case "[Upload] - isValidPressButton":
      return {
        ...state,
      };

    case "[Upload] - AddFile":
      return {
        ...state,
        urlOfImages: [...state.urlOfImages, action.payload],
        isValid: true,
      };

    case "[Upload] - ClearProyect":
      return {
        ...state,
        urlOfImages: [],
        isValid: false,
      };

    default:
      return state;
  }
};
