import { useRef } from "react";

function App() {
  const inputRef = useRef(null); // aqui declaramos que inputRef estara conectada con useRef que iniciara como nulo

  const handleFocus = () => {
    inputRef.current.focus(); 
  };
  //Esta constante enfoca el espacio de escritura cuando se presione

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={handleFocus}>Enfocar Input</button>
    </div>
  );
  //Aqui cada ves que se escribe o se presiona el boton lo normal es que renderise de nuevo,
  //pero con useRef se evita
}

export default App;