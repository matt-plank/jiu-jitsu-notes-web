import { useState } from "react";
import { token as tokenApi } from "../api/api";
import ActionButton from "../components/actionButton";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const logIn = async () => {
    const token = await tokenApi.create(username, password);

    if (token === "") {
      setErrorMessage("Incorrect username or password");
      return;
    }

    localStorage.setItem("token", token);
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-md w-80">
          <h1 className="text-5xl font-thin m-5">Log In</h1>
          <input
            className="p-2 rounded-sm border w-full"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-2 rounded-sm border w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="w-full px-4 py-2 bg-red-500 rounded-sm text-white">
              {errorMessage}
            </div>
          )}

          <ActionButton className="w-full" onClick={logIn}>
            Log In
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default Login;
