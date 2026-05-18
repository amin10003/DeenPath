import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center card shadow-md m-4 shadow-black w-112.5">
      <h2>Login Page</h2>

      <input
        placeholder="Email"
        name="email"
        className="w-full p-2 my-2.5 mx-1.5"
        type="email"
        onChange={handleChanges}
      />

      <input
        className="w-full p-2 my-2.5 mx-1.5"
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChanges}
      />

      <div>{message && <p>{message}</p>}</div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
