import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthServices";

const AuthenticationPage = () => {
  const [user, setUser] = useState({
    username: "admin",
    password: "admin",
  });
  const navigate = useNavigate();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userAsString = JSON.stringify(user);
    const token = await AuthService.createNewToken();
    const { request_token } = token.data;
    const loginResponse = await AuthService.createNewSession(
      user,
      request_token
    );
    // if (username && password && username === "admin" && password === "admin") {
    //   localStorage.setItem("user", userAsString);
    //   navigate("/");
    // } else {
    //   alert("Wrong password or username");
    // }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={onHandleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onHandleChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default AuthenticationPage;
