const Entradas = ({ entradas }) => {
  return (
    <div className="ContP">
      <h1>Entradas</h1>
      {entradas.map((ent) => (
        <div className="saidasEnt">
          <p>
            <strong>Nome:</strong>
            {ent.name}
          </p>
          <p>
            <strong>Quantidade:</strong>
            {ent.quantity}
          </p>
          <p>
            <strong>Preço:</strong>
            {ent.price}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Entradas;
