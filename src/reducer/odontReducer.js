export const odontReducer = (state, action) => {
  switch (action.type) {
    case "GET_ODONTOLOGOS":
      return {
        ...state,
        odontologos: action.payload,
      };
    case "GET_ODONTOLOGO":
      return {
        ...state,
        odontologo: action.payload,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoritos: state.favoritos.filter(
          (odontologo) => odontologo.id !== action.payload
        ),
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};
