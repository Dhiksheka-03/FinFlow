function TransactionTable() {
  return (
    <div>
      <h2>Recent Transactions</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salary</td>
            <td>₹50,000</td>
            <td>Income</td>
          </tr>

          <tr>
            <td>Groceries</td>
            <td>₹2,500</td>
            <td>Expense</td>
          </tr>

          <tr>
            <td>Electricity Bill</td>
            <td>₹1,200</td>
            <td>Expense</td>
          </tr>

          <tr>
            <td>Freelancing</td>
            <td>₹10,000</td>
            <td>Income</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;