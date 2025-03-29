import { useState, useEffect } from 'react';

function App() {
  const [contador, setContador] = useState(0); //Primero tenemos un useState para un contador, esta sera nuestra accion.

  useEffect(() => {
    console.log("Hola mundo");//esto es lo que sucede cuando pasa la accion
  }, [contador]);//esta es la accion que useEffect espera para activarse

  //useEffect imprimira en consola un "Hola mundo" cada ves que el contador aumente

  return (
    <div>
      <p>Revisa la consola para ver el mensaje.</p>
      <button onClick={() => setContador(contador + 1)}>Presiona aquí</button>
    </div>
  );
}
//cada ves que se da al botin el contador aumenta, haciendo que useEffect se active

export default App;
