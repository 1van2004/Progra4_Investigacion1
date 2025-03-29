import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");
  //Tenemos dos useState, uno para el numero y otro para el nombre

  
  const double = useMemo(() => {
    console.log("Calculo generado");
    return number * 2;
  }, [number]);
  //Este es el Hook el cual retorna el numero doble del mostrado en pantalla y guarda su resultado
  //Cada ves que renderiza, mustra el mensaje "Calculo generado" en la consola

  return (
    <div>
      <h1>Número: {number}</h1>
      <h2>Doble: {double}</h2>
      <button onClick={() => setNumber(number + 1)}>Aumentar número</button>

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
  //Cada ves que se escribe, todo se renderiza, pero al utilizar useMemo el calculo no se renderiza.
  //A esepcion de cuando se usa el boton de aumentar numero, porque en ese caso se cambia el numero y ocupa
  //renderizar otra vez.
}

export default App;