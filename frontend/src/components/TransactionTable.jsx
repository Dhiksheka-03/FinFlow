function TransactionTable({ transactions, deleteTransaction }) {
  return (
    <div className="table-container">
      <h2>Recent Transactions</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>₹{item.amount}</td>
              <td>{item.type}</td>
              <td>
                <button onClick={() => deleteTransaction(index)}>
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;