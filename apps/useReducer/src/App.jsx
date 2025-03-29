import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Agregar":
      return { count: state.count + 1 };
    case "Quitar":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
};
//Aqui tenemos a las opciones de reducer, las cuales pueden agregar, quitar y reset a la vez, por medio de state.

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //aqui declaramos la constante, conectada con useRducer y con lo establecido anteriormente como reducer

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: "Agregar" })}>Agregar</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "Quitar" })}>Quitar</button>
      
    </div>
  );
};
//State.count llama el estado del numero, y los botones llaman las opciones como fueron declaradas en la parte de arriba



export default App;