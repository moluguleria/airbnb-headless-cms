import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(form);
      login(res.data);

      if (res.data.user.role?.name === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authx-page">
      {/* LEFT */}
      <div className="authx-left">
        <div className="authx-left-content">
          <h2>Welcome to</h2>
          <h1>Staybnb</h1>
          <p>Login and continue your journey with us.</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="authx-right">
        <div className="authx-card-wrapper">
          <form className="authx-card" onSubmit={handleSubmit}>
            <h2>Login</h2>

            {error && <div className="authx-error">{error}</div>}

            <input
              type="email"
              placeholder="E-mail Address"
              required
              onChange={(e) =>
                setForm({ ...form, identifier: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="authx-primary-btn" disabled={loading}>
              {loading ? "Signing in..." : "Log In"}
            </button>

            <Link to="/signup" className="authx-ghost-btn">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
