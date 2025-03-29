import React, { useState, useContext } from "react";


const MessageContext = React.createContext();
// Este es nuestro contexto, conectado con useContext, que funcionara como contenedor de mensaje

function MessageProvider({ children }) {
  const [message, setMessage] = useState("¡Hola desde el contexto!");

  //"MessageProvider" sera nuestro children, y junto a un useState contendra el mensaje

  return (
    <MessageContext.Provider value={message}>
      {children}
    </MessageContext.Provider>
  );
}
//De esa forma el contenedor devolvera el mesaje, aunque los dos esten en dos lugares distintos

function DisplayMessage() {
  const message = useContext(MessageContext);
  return <h1>{message}</h1>;
}
//Esta funcion es la que muestra el mensaje, desde useContext

function App() {
  return (
    <div>
      <MessageProvider>
        <DisplayMessage />
      </MessageProvider>
    </div>
  );
}

//Finalmente se "envuelve" DisplayMessage con MessageProvider, para que el mensaje se pueda mostrar

export default App;