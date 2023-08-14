import { useState, useEffect } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/NewInvestment/InvestmentForm";
import Investments from "./Components/Investments/Investments";

function App() {
  const [inputData, setInputData] = useState({});
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    console.log("Investments updated:", investments);
  }, [investments]);

  const inputDataHandler = (formData) => {
    setInputData((prevData) => ({ ...prevData, ...formData }));
  };

  const addExpense = (investment) => {
    setInvestments((prevInvestments) => [...prevInvestments, investment]);
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    addExpense(inputData);
    resetHandler();
  };

  const resetHandler = () => {
    setInputData({});
  };

  return (
    <div>
      <Header />
      <InvestmentForm
        onDataChange={inputDataHandler}
        onCalculate={calculateHandler}
        onReset={resetHandler}
        inputDataValue={inputData}
      />

      {investments.length === 0 && <p> No expenses </p>}
      {investments.length > 0 && <Investments />}
    </div>
  );
}

export default App;
