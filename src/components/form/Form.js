import { useState } from "react";

function Form(props) {
  const [enteredCurrentSavings, setCurrentSavings] = useState(10000);
  const [enteredYearlySavings, setYearlySavings] = useState(1200);
  const [enteredExpectedInterest, setExpectedInterest] = useState(7);
  const [enteredInvestmentDuration, setInvestmentDuration] = useState(10);

  const currentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expectedInterestChangeHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const investmentDurationChangeHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newData = {
      "current-savings": enteredCurrentSavings,
      "yearly-contribution": enteredYearlySavings,
      "expected-return": enteredExpectedInterest,
      duration: enteredInvestmentDuration,
    };
    props.onSubmitForm(newData);
  };

  const onResetHandler = () => {
    setCurrentSavings(10000);
    setYearlySavings(1200);
    setExpectedInterest(7);
    setInvestmentDuration(10);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={enteredCurrentSavings}
            onChange={currentSavingsChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={enteredYearlySavings}
            onChange={yearlySavingsChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={enteredExpectedInterest}
            onChange={expectedInterestChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={enteredInvestmentDuration}
            onChange={investmentDurationChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={onResetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default Form;
