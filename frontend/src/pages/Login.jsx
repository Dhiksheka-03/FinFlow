import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome Back 👋</h1>
        <p>Login to your FinFlow account</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;