import {
  FaChartPie,
  FaMoneyBillWave,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>💰 FinFlow</h2>

      <ul>
        <li><FaChartPie /> Dashboard</li>
        <li><FaMoneyBillWave /> Income</li>
        <li><FaWallet /> Expenses</li>
        <li><FaChartLine /> Analytics</li>
      </ul>
    </div>
  );
}

export default Sidebar;