import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [namee, setNamee] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      // Create account with email + password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: namee,
      });

      setMessage("Account created successfully");
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
    } else if (name === "name") {
      setNamee(value);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center card shadow-md m-4 shadow-black w-112.5">
      <h2>Signup</h2>

      <input
        className="w-full p-2 my-2.5 mx-1.5"
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChanges}
      />

      <input
        className="w-full p-2 my-2.5 mx-1.5"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChanges}
      />

      <input
        className="w-full p-2 my-2.5 mx-1.5"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChanges}
      />

      <div>{message && <p>{message}</p>}</div>

      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
}
