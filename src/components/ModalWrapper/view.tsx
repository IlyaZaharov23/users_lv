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
import { styles } from "./styles";

export const ModalWrapper = ({
  children,
  open,
  title,
  actionBtnTitle,
  onClose,
  onSave,
  isDelete,
}: ModalWrapperProps) => {
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSave();
    }
  };
  return (
    <Dialog open={open} onClose={onClose} onKeyDown={handleEnterKeyDown}>
      <DialogTitle sx={styles.titleWrapper}>
        <Typography sx={styles.titleText}>{title}</Typography>
        <IconButton onClick={onClose}>
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          sx={styles.secondaryBtnColor}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color={isDelete ? "error" : "primary"}
          onClick={onSave}
        >
          {actionBtnTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
