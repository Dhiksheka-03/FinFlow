import { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction = {
      title,
      amount,
      type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;