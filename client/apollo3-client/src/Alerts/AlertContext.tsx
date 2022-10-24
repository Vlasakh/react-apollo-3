import React, { createContext, useContext, useMemo, useState } from 'react';

export const SEVERITY = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
} as const;

const AlertContext = createContext({});

export const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState({ open: false, message: null, severity: SEVERITY.info });

  const handleAlert = (message, severity) =>
    setAlert({
      message,
      severity: severity ?? SEVERITY.info,
      open: true,
    });

  const handleCloseAlert = () => setAlert({ ...alert, open: false });

  const context = useMemo(
    () => ({
      alert,
      setAlert: handleAlert,
      closeAlert: handleCloseAlert,
    }),
    [alert],
  );

  return <AlertContext.Provider value={context}>{children}</AlertContext.Provider>;
};

export const useAlertContext = () => useContext(AlertContext);
