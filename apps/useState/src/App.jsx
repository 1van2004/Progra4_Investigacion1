import React, { useState } from "react";
//aqui es donde importamos el Hook de React "useState"

const App = () => {
  const [encendido, setEncendido] = useState("white");  
  //una constante dondeencapsulamos encedido y setEnsendido, con
//un stado inicial en blanco "encedido"

  const apagador = () => {
    setEncendido(encendido === "white" ? "black" : "white"); 
  };
//hace un intercabio entre blanco y negro (encendido y apagado)


  return (
    <div
      style={{
        backgroundColor: encendido,
        width: "100vw", 
        height: "100vh", 
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        margin: "0", 
        padding: "0",
        overflow: "hidden", 
      }}
    >
      <button
        onClick={apagador}
        style={{
          padding: "15px 30px",
          fontSize: "20px",
          border: "none",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: encendido === "white" ? "black" : "white",
          color: encendido === "white" ? "white" : "black",
          transition: "background-color 0.5s, color 0.5s",
        }}       
      >
        {encendido === "white" ? "Apagar" : "Encender"}
      </button>

    </div>
    //El boton activa la constante apagador, que segun si esta apagado o encendido presenta un estilo de pagina diferente
  );
};

export default App;