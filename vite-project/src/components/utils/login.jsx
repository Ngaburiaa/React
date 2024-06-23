import React, { useState } from "react";

export default function LoginForm() {
  function emailCheck(event) {
    const value = event.target.value;
    setEmail(value);
    setIsButtonDisabled(value === "" || password.length < 7);
    setError("")

  }

  function passwordCheck(event) {
    const { value } = event.target;
    setPass(value);
    setIsButtonDisabled(value.length < 7 || email === "");
    setError("");

  
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");


  const credentials = {
    email: "dennisngaburia@gmail.com",
    password: "1234567",
  };

  function submit() {
    if (
      email.toLowerCase() == credentials.email.toLowerCase() &&
      password.toLowerCase() == credentials.password.toLowerCase()
    ) {
      alert("Login Successful!!!");
    } else {
      setError("login failure!!!");
    }
  }
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input onChange={emailCheck} id={"email"} type={"email"} />
      </div>
      <br />
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input onChange={passwordCheck} id={"password"} type={"password"} />
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage">{error}</div>
    

      <div className="button">
        <button onClick={submit} disabled={isButtonDisabled}>
          Login
        </button>

      </div>
    </div>
  );
}