import { useEffect, useState } from "react";
import auth from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };

    auth.login(newUser).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("role", "user");

        let role = localStorage.getItem("role");

        if (role != "admin") {
          navigate("/");
        } else {
          navigate("/error");
        }
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="w-50 m-auto bg-light text-primary p-3 rounded mt-5">
        <h3 className="text-center">Login</h3>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            id={username}
            autoComplete="off"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="password"
            className="form-control"
            id={password}
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={login}
          type="submit"
          className="btn bg-primary text-white w-100 mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
