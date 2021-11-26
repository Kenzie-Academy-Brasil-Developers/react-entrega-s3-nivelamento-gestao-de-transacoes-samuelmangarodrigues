import "./App.css";
import { useState } from "react";
import Inputs from "./components/inputs";
function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <Inputs transactions={transactions} setTransactions={setTransactions} />
      </header>
    </div>
  );
}

export default App;
