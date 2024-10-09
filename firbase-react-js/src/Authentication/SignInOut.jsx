import { useState } from "react";
import { auth, googleAuth } from "../Resources/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

function SignInOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Tuko On");
  };

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleAuth);
    alert("Anguka Nayo");
  };

  const logOut = async () => {
    await signOut(auth);
    alert("Logout");
  };
  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="email">
          <label htmlFor="Email">Email</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder=" Enter Password"
            required
          />
        </div>
        <button className="signin-btn" onClick={signIn}>
          Sign-In
        </button>
        <button className="google" onClick={googleSignIn}>
          Sign In with google
        </button>
        <button className="Logout" onClick={logOut}>
          Log-Out
        </button>
      </div>
    </div>
  );
}

export default SignInOut;
