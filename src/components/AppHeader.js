import logo from "../assets/investment-calculator-logo.png";

function AppHeader() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default AppHeader;
