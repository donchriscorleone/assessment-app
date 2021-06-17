import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Toast from "../components/toast";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "", password2: "" });
  const [toastInfo, setToastInfo] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email) {
      setToastInfo({
        message: "Please input your email",
        type: "danger",
        visible: true,
      });
      return;
    }

    if (user.password != user.password2) {
      setToastInfo({
        message: "Password does not match",
        type: "danger",
        visible: true,
      });
      return;
    }

    setToastInfo({
      message: "Redirecting to login",
      type: "success",
      visible: true,
    });

    setTimeout(() => {
      router.push("/signin");
    }, 2500);
  };

  return (
    <>
      {toastInfo.visible && (
        <Toast message={toastInfo.message} type={toastInfo.type} />
      )}
      <div className={styles.container}>
        <form noValidate className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Sign Up</h1>

          <input
            type="email"
            placeholder="Email:"
            className={styles.input}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password:"
            className={styles.input}
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Retype password:"
            className={styles.input}
            name="password2"
            onChange={handleChange}
          />

          <button type="submit" className={styles.submitBtn}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}
