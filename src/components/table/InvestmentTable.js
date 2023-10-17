import TableHeader from "./TableHeader";

const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function InvestmentTable(props) {
  return (
    <table className="result">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year)}
            </td>
            <td>
              {formatter.format(props.initialInvestment +
                yearData.yearlyContribution * yearData.year)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default InvestmentTable;
