import TableHeader from "./TableHeader";

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
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>
              {yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year}
            </td>
            <td>
              {props.initialInvestment +
                yearData.yearlyContribution * yearData.year}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default InvestmentTable;
