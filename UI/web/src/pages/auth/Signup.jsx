import { useState } from "react";
import { signupUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signupUser(form);
      login(res.data);
      navigate("/");
    } catch {
      setError("Signup failed");
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
          <p>Create your account and get started.</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="authx-right">
        <div className="authx-card-wrapper">
          <form className="authx-card" onSubmit={handleSubmit}>
            <h2>Create your account</h2>

            {error && <div className="authx-error">{error}</div>}

            <input
              placeholder="Name"
              required
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="E-mail Address"
              required
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
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
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <Link to="/login" className="authx-ghost-btn">
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
