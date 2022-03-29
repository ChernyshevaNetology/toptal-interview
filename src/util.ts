import { IUserData } from "./LoginForm";

export function performLogin({ email, password }: IUserData) {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise<void>((resolve, reject) => {
    setTimeout(function () {
      if (password === "correct" && !!email) {
        resolve();
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, delay);
  });
}
