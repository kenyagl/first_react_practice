import { useState, useEffect } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/NewInvestment/InvestmentForm";
import Investments from "./Components/Investments/Investments";

function App() {
  const [inputData, setInputData] = useState({});
  const [investment, setInvestment] = useState({});

  useEffect(() => {
    console.log("Investments updated:", investment);
  }, [investment]);

  const inputDataHandler = (formData) => {
    setInputData((prevData) => ({ ...prevData, ...formData }));
  };

  const calculateInvestment = (userData) => {
    setInvestment(userData);
  };

  const calculateHandler = (event) => {
    event.preventDefault();
    calculateInvestment(inputData);
    // setInvestment(userData);
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

      {investment && Object.keys(investment).length === 0 ? (
        <p> Fill the form to calculate your returns! </p>
      ) : (
        <Investments userData={investment} />
      )}
    </div>
  );
}

export default App;
