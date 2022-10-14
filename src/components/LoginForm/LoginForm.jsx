import { useState } from "react";
import { useNavigate } from "react-router-dom";

// LoginForm
export default function LoginForm(props) {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      };
      const fetchResponse = await fetch("/api/users/login", options);

      if (!fetchResponse.ok) throw new Error("Bad Request while login");
      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const user = JSON.parse(atob(token.split(".")[1])).user;
      props.setUser(user);
      nav("/");
    } catch (err) {
      console.log("signupform error", err);
      setError("Signup failed, try again");
    }
  }

  return (
    <div className="wrapper">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            placeholder="Enter email"
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Create password"
            onChange={handleChange}
            required
          />
          <div className="btn-container">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
