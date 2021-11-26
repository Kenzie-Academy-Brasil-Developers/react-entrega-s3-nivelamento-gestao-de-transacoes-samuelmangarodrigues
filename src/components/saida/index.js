import { useState } from "react";

const Saidas = ({ saidas }) => {
  return (
    <div className="ContP">
      <h1>Saídas:</h1>

      {saidas.map((sai) => (
        <div className="saidasEnt">
          <p>
            <strong>Nome:</strong>
            {sai.name}
          </p>
          <p>
            <strong>Quantidade:</strong>
            {sai.quantity}
          </p>
          <p>
            <strong>Preço:</strong>
            {sai.price}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Saidas;
