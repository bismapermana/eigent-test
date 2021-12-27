export const initialState = {
  data: {},
  message: "",
  isLoading: true,
  isError: false,
};

type actiontype =
  | { type: "FETCH_SUCCESS"; payload: typeof initialState }
  | { type: "FETCH_FAILED"; payload: typeof initialState };

export const reducer = (state: any, action: actiontype) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        data: action.payload,
        isLoading: false,
      };
    case "FETCH_FAILED":
      return {
        message: action.payload,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
