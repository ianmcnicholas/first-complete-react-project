import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function InvestmentTable() {
  return (
    <table className="result">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </table>
  );
}
export default InvestmentTable;
