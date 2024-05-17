import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "is-email";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();

    // validation
    setError({ name: "", email: "", password: "" });

    if (formData.email === "") {
      setError((prev) => ({ ...prev, email: "Email is required" }));
      return;
    }

    if (!isEmail(formData.email)) {
      setError((prev) => ({ ...prev, email: "Invalid email" }));
      return;
    }

    if (formData.password === "") {
      setError((prev) => ({ ...prev, password: "Password is required" }));
      return;
    }

    if (formData.password.length < 6) {
      setError((prev) => ({
        ...prev,
        password: "Password length should be greater than 6",
      }));
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );

      if (response.data.isSuccess) {
        navigate(`/onboarding?type=${response.data.type}`);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="form">
      <h1>Login User</h1>
      <ToastContainer position="top-center" closeButton={false} />
      <form onSubmit={login}>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            value={formData.email}
            className={`${error.email && "error"}`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {error.email && <small>{error.email}</small>}
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            className={`${error.password && "error"}`}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error.password && <small>{error.password}</small>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
