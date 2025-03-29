import './App.css';
import { customHook } from './Hook/customHook';

function App() {
  
  const { count, Agregar } = customHook();

  return (
    <>
      <h1>La cuenta va por: {count}</h1>

      <button onClick={Agregar}>
        Agregar a la cuenta
      </button>
    </>
  );
}

export default App;
//En esta area se importa el hook que creamos y de esa forma se puede usar sus componentes aqui tambien
