function Chart() {
  return (
    <div className="chart-container">
      <h2>📊 Income vs Expense</h2>

      <div className="chart-box">
        <div className="income">
          <h3>Income</h3>
          <p>₹60,000</p>
        </div>

        <div className="expense">
          <h3>Expense</h3>
          <p>₹15,000</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;