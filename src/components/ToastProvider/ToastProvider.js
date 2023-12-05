import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);
  return (
    <ToastContext.Provider value={[toastList, setToastList]}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
