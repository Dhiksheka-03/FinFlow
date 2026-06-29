import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>💰 FinFlow</h1>
        <p>Smart Finance Management System</p>

        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;