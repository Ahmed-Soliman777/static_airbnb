import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Log in to continue</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Log in</button>
        
        <p style={styles.footerText}>
          Don't have an account? <Link to="/register" style={styles.link}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#F7F7F7",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "360px",
    padding: "2.5rem 2rem",
    borderRadius: "16px",
    background: "#fff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#222",
  },
  subtitle: {
    margin: 0,
    fontSize: "0.95rem",
    color: "#666",
    marginBottom: "1.5rem",
  },
  input: {
    padding: "0.85rem 1rem",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s",
  },
  button: {
    padding: "0.85rem 1rem",
    marginTop: "0.5rem",
    background: "#FF5A5F",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1rem",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  footerText: {
    fontSize: "0.85rem",
    color: "#888",
    marginTop: "1rem",
  },
  link: {
    color: "#FF5A5F",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default Login;
