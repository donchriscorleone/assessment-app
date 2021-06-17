import React from "react";

const Toast = ({ message, type }) => {
  return (
    <div className={`toastContainer ${type}`}>
      <h1>{message}</h1>
    </div>
  );
};

export default Toast;
