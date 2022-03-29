import { performLogin } from "./util";
import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "./LoginForm.module.css";

// ================ LOGIN FORM ====================
//
// You are provided with an incomplete login form.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.
//
// Tasks:
//  * Login button should trigger the performLogin() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the performLogin() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the performLogin function to find out how to log in successfully.

export interface IUserData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IUserData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<null | string>(null);
  const isDisabled = !(
    data.email.length > 0 &&
    data.password.length > 6 &&
    !loading
  );
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setData({
      ...data,
      [id]: value,
    });
    console.log("data", data);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await performLogin(data);
      setError(null);
      alert("login successful");
      console.log("success");
    } catch (err: any) {
      setError(err?.message);
      console.log(err?.message);
    } finally {
      setIsLoading(false);
      setData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <label htmlFor={"email"}>Email</label>
          <TextField
            label="Enter email"
            variant="outlined"
            onChange={handleInput}
            id={"email"}
            type={"email"}
            value={data.email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor={"password"}>Password</label>
          <TextField
            label="Enter password"
            variant="outlined"
            onChange={handleInput}
            id={"password"}
            type={"password"}
            value={data.password}
          />
        </div>

        {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.row}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            disabled={isDisabled}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
