import styles from "../styles/SignIn.module.css";
import { useRouter } from "next/router";
import Toast from "../components/toast";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
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

      setTimeout(() => {
        setToastInfo({ ...toastInfo, visible: false });
      }, 3000);
      return;
    }

    if (!user.password) {
      setToastInfo({
        message: "Please fill your password",
        type: "danger",
        visible: true,
      });
      setTimeout(() => {
        setToastInfo({ ...toastInfo, visible: false });
      }, 3000);
      return;
    }

    setToastInfo({
      message: "Redirecting to login",
      type: "success",
      visible: true,
    });

    setTimeout(() => {
      router.push("/home");
    }, 2500);
  };

  return (
    <>
      {toastInfo.visible && (
        <Toast message={toastInfo.message} type={toastInfo.type} />
      )}
      <div className={styles.container}>
        <form noValidate className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Sign In</h1>

          <input
            type="email"
            placeholder="Email:"
            className={styles.input}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password:"
            className={styles.input}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
