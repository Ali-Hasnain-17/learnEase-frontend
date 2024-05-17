import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "is-email";
import axios from "axios";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "Student",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    // validations

    setError({ name: "", email: "", password: "" });

    if (formData.name === "") {
      setError((prev) => ({ ...prev, name: "Name is required" }));
      return;
    }

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

    const response = await axios.post(
      "http://localhost:5000/auth/register",
      formData
    );
    const { isSuccess } = response.data;

    if (isSuccess) {
      navigate("/login");
    }
  }

  return (
    <div className="form">
      <h1>Register User</h1>
      <form onSubmit={register}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            className={`${error.name && "error"}`}
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {error.name && <small>{error.name}</small>}
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            className={`${error.email && "error"}`}
            value={formData.email}
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
            className={`${error.password && "error"}`}
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error.password && <small>{error.password}</small>}
        </div>
        <div className="field">
          <label>Password</label>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, type: e.target.value }))
            }
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
