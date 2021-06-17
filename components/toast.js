import React from "react";
import styles from "../styles/Toast.module.css";

const Toast = ({ message, type }) => {
  return (
    <div>
      <h1>This is a toast</h1>
      <button>Close</button>
    </div>
  );
};

export default Toast;
