import { useState } from "react";
import accountApi from "../api/accounts";
import ActionButton from "../components/actionButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerAccount = async () => {
    if (password !== repeatedPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const created = await accountApi.create(username, password);

    if (!created.success) {
      setErrorMessage(`Account could not be created - ${created.message}`);
      return;
    }

    window.location.href = "/#/login";
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-28" />

        <div className="flex flex-col gap-5 p-5">
          <h1 className="text-5xl font-black text-gray-800 m-5 text-center">
            Register
          </h1>

          <input
            className="p-2 rounded-sm border w-64"
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

          <input
            className="p-2 rounded-sm border w-full"
            type="password"
            placeholder="Repeat Password"
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
          />

          {errorMessage && (
            <div className="w-full px-4 py-2 bg-red-500 rounded-sm text-white">
              {errorMessage}
            </div>
          )}

          <ActionButton className="w-full" onClick={registerAccount}>
            Log In
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default Register;
