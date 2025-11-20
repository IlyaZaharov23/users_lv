"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { ModalWrapperProps } from "./types";
import { CloseOutlined } from "@mui/icons-material";

export const ModalWrapper = ({
  children,
  open,
  title,
  actionBtnTitle,
  onClose,
  onSave,
}: ModalWrapperProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSave();
    }
  };
  return (
    <Dialog open={open} onClose={onClose} onKeyDown={handleEnterKeyDown}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{title}</Typography>
        <IconButton onClick={onClose}>
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSave}>{actionBtnTitle}</Button>
      </DialogActions>
    </Dialog>
  );
};
