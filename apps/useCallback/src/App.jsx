import React, { useState, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0); //Una ves mas tenemos una cuaenta conactada a useState
  const [name, setName] = useState("");// junto con un useState para nombre

  const incrementar = useCallback(() => {
    console.log("Incrementando");
    setCount((prevCount) => prevCount + 1);
  }, []);

//Aqui tenemos la funcion de incremetar que ahora esta con el Hook de useCallBack,
//asi que no renderizara cuando se agregue el nombre. Esto se puede ver en consola.


  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>

      <hr/>
      <input
        type="text"
        placeholder="Escribe tu nombre..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tu nombre: {name}</p>
    </div>
  );
};

//Y al final este es el que muestra el resultado al usuario, se puede ver como todo renderiza
//al usar el nombre, exsepto la funcion que tiene useCallback

export default App;
