import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";
import useEscapeKey from "../../hooks/useEscapeKey";

function ToastShelf() {
  const [toastList, setToastList] = React.useContext(ToastContext);

  useEscapeKey(() => {
    setToastList([]);
  });

  const removeToast = (toastId) => {
    setToastList(toastList.filter(({ id }) => id !== toastId));
  };

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastList.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            message={toast.message}
            onDismiss={() => removeToast(toast.id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
