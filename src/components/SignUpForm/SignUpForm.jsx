import { useState } from "react";
import { useNavigate } from "react-router-dom";

// SignUpForm
export default function SignUpForm({ setUser }) {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      };
      const fetchResponse = await fetch("/api/users/signup", options);

      if (!fetchResponse.ok) throw new Error("Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const user = JSON.parse(atob(token.split(".")[1])).user;
      setUser(user);
      nav("/");
    } catch (err) {}
  };

  const disable =
    credentials.password !== credentials.confirm ? "disabled" : "";


  return (
    <div className="wrapper">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={credentials.name}
            placeholder="Enter name"
            onChange={handleChange}
            required
          />
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
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={credentials.confirm}
            placeholder="Confirm password"
            onChange={handleChange}
            required
          />
          <div className="btn-container">
            <button className="button" type="submit" disabled={disable}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
