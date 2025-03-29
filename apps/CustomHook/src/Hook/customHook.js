import { useEffect, useState } from "react"
export function customHook() {

    const [count, setCount] = useState(() => Number(localStorage.getItem("count")) || 0);

    const Agregar = () => {
      setCount((count) => count +1)
        }

        useEffect(() => {
            localStorage.setItem("count", count);
        }, [count]);

        return {count, Agregar}

}
//En esta pagina tenemos el custom Hook que se trata de la constante de agregar a la cuenta y ademas guardar de forma local