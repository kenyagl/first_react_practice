import { useState } from "react";
import Header from "./Components/Header";
import InvestmentForm from "./Components/NewInvestment/InvestmentForm";
import Investments from "./Components/Investments/Investments";


function App() {
  
  return (
    <div>
      <Header />
      <InvestmentForm />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Investments />
    </div>
  );
}

export default App;
