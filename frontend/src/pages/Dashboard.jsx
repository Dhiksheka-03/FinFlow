import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="dashboard" style={{ flex: 1 }}>
        <Navbar />

        <h1>📊 FinFlow Dashboard</h1>

        <div className="cards">
          <SummaryCard
            title="Total Balance"
            amount="₹45,000"
            color="#4f46e5"
          />

          <SummaryCard
            title="Income"
            amount="₹60,000"
            color="#16a34a"
          />

          <SummaryCard
            title="Expense"
            amount="₹15,000"
            color="#dc2626"
          />

          <SummaryCard
            title="Savings"
            amount="₹45,000"
            color="#f59e0b"
          />
        </div>

        <TransactionTable />
      </div>
    </div>
  );
}

export default Dashboard;