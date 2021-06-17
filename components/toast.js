import React, { useState } from "react";

const Toast = ({ message, type }) => {
  return (
    <div className={`toastContainer ${type}`}>
      <h1>{message}</h1>
      <button>Close</button>
    </div>
  );
};

export default Toast;
