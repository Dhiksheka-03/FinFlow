import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import AddTransaction from "../components/AddTransaction";
import TransactionTable from "../components/TransactionTable";
import Chart from "../components/Chart";

function Dashboard() {
  const [transactions, setTransactions] = useState([
    {
      title: "Salary",
      amount: 50000,
      type: "Income",
    },
    {
      title: "Groceries",
      amount: 2500,
      type: "Expense",
    },
    {
      title: "Electricity Bill",
      amount: 1200,
      type: "Expense",
    },
    {
      title: "Freelancing",
      amount: 10000,
      type: "Income",
    },
  ]);

  // Add Transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Delete Transaction
  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  // Dynamic Calculations
  const totalIncome = transactions
    .filter((item) => item.type === "Income")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "Expense")
    .reduce((sum, item) => sum + Number(item.amount), 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        className="dashboard"
        style={{ flex: 1, padding: "20px", background: "#f5f7fb" }}
      >
        <Navbar />

        <h1>📊 FinFlow Dashboard</h1>

        <div className="cards">
          <SummaryCard
            title="Total Balance"
            amount={`₹${totalBalance}`}
            color="#4f46e5"
          />

          <SummaryCard
            title="Income"
            amount={`₹${totalIncome}`}
            color="#16a34a"
          />

          <SummaryCard
            title="Expense"
            amount={`₹${totalExpense}`}
            color="#dc2626"
          />

          <SummaryCard
            title="Savings"
            amount={`₹${totalBalance}`}
            color="#f59e0b"
          />
        </div>

        <AddTransaction addTransaction={addTransaction} />

        <TransactionTable
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />

        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;