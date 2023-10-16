import { useState } from "react";

function Form(props) {
  const [enteredCurrentSavings, setCurrentSavings] = useState("");
  const [enteredYearlySavings, setYearlySavings] = useState("");
  const [enteredExpectedInterest, setExpectedInterest] = useState("");
  const [enteredInvestmentDuration, setInvestmentDuration] = useState("");

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
    // create object from form data here # newData
    // props.onSubmitForm(newData);
  };

  const onResetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
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
