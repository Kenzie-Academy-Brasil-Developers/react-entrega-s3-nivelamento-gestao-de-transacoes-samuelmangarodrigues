import { useState } from "react";
import Display from "../display";
import Entradas from "../entrada";
import Saidas from "../saida";
import "./style.css";
const Inputs = ({ transactions, setTransactions }) => {
  const [nameE, setNameE] = useState();
  const [qntE, setQntntE] = useState();
  const [priceE, setPriceE] = useState();
  const [nameS, setNameS] = useState();
  const [qntS, setQntS] = useState();
  const [priceS, setPriceS] = useState();
  const [entradas, setEntradas] = useState([]);
  const [saidas, setSaida] = useState([]);
  const [change, setChange] = useState(false);
  const entrada = () => {
    const ent = { name: nameE, quantity: qntE, price: priceE };
    setTransactions([...transactions, ent]);
    setEntradas([...entradas, ent]);
  };
  const onChans = () => {
    setChange(!change);
  };
  const saida = () => {
    const sair = { name: nameS, quantity: qntS, price: priceS };
    setTransactions([...transactions, sair]);
    setSaida([...saidas, sair]);
  };
  return (
    <div>
      <div className="ContInp">
        <h1>Digite as entradas</h1>
        <input onChange={(e) => setNameE(e.target.value)} />
        <input onChange={(e) => setQntntE(e.target.value)} />
        <input onChange={(e) => setPriceE(e.target.value)} />
        <button onClick={entrada}>Entradas</button>
      </div>
      <div className="ContInp">
        <h1>Digite as saídas</h1>
        <input onChange={(e) => setNameS(e.target.value)} />
        <input onChange={(e) => setQntS(e.target.value)} />
        <input onChange={(e) => setPriceS(e.target.value)} />
        <button onClick={saida}>Saída</button>
      </div>
      <button onClick={onChans}>Motrar {change ? "entradas" : "saídas"}</button>
      {!change ? <Entradas entradas={entradas} /> : <Saidas saidas={saidas} />}
      <Display transictions={transactions} />
    </div>
  );
};
export default Inputs;
