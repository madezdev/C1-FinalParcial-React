import { createContext, useContext, useEffect, useReducer } from "react";
import { odontReducer } from "../reducer/odontReducer";

const OdontContext = createContext();

const initialState = {
  odontologos: [],
  favoritos:JSON.parse(localStorage.getItem('favoritos')) || [],
  theme: (() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme !== null ? JSON.parse(storedTheme) : true;
  })(),
};

const ContextOdont= ({ children }) => {
  
  const [state, dispatch] = useReducer(odontReducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_ODONTOLOGOS", payload: data });
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
  },[state.favoritos])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state.theme));
    const body = document.body;
    body.classList.toggle("light-theme", !state.theme);
    body.classList.toggle("dark-theme", state.theme);
  }, [state.theme]);


  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <OdontContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </OdontContext.Provider>
  );
};

export default ContextOdont;

export const useOdontContext = () => useContext(OdontContext);
