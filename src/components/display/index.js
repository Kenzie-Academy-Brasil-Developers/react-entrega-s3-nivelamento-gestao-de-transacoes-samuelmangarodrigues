const Display = ({ transictions, entradas }) => {
  return (
    <div className="ContP">
      <h1>Todas as movimentações</h1>
      {transictions.map((tr) => (
        <div className="saidasEnt">
          <p>
            <strong>Nome:</strong>
            {tr.name}
          </p>
          <p>
            <strong>Quantidade:</strong>
            {tr.quantity}
          </p>
          <p>
            <strong>Preço:</strong>
            {tr.price}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Display;
