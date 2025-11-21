import { useState } from "react";
import { Snackbar, Alert as MuiAlert } from "@mui/material";
import { AlertOptions } from "../types";

export const useActionsAlert = () => {
  const [open, setOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    message: "",
    severity: "info",
  });

  const showAlert = (options: AlertOptions) => {
    setAlertOptions(options);
    setOpen(true);
  };

  const AlertComponent = (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        onClose={() => setOpen(false)}
        severity={alertOptions.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alertOptions.message}
      </MuiAlert>
    </Snackbar>
  );

  return { showAlert, AlertComponent };
};
