import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="dashboard" style={{ flex: 1 }}>
        <Navbar />

        <h1>📊 FinFlow Dashboard</h1>

        <div className="cards">
          <div className="card-box">
            <h3>Total Balance</h3>
            <h2>₹45,000</h2>
          </div>

          <div className="card-box">
            <h3>Total Income</h3>
            <h2>₹60,000</h2>
          </div>

          <div className="card-box">
            <h3>Total Expense</h3>
            <h2>₹15,000</h2>
          </div>

          <div className="card-box">
            <h3>Savings</h3>
            <h2>₹45,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;