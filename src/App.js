import AppHeader from "./components/AppHeader";
import InvestmentTable from "./components/table/InvestmentTable";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
      <AppHeader />

      <Form onSubmitForm={calculateHandler} />

      {!results && <p>There are no results to display.</p>}
      {results && (
        <InvestmentTable
          data={results}
          initialInvestment={
            results[0].savingsEndOfYear -
            results[0].yearlyInterest -
            results[0].yearlyContribution
          }
        />
      )}
    </div>
  );
}

export default App;
