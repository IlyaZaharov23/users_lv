"use client";

import { Typography } from "@mui/material";
import { deleteUser } from "src/utils/UsersUtil";
import { ModalWrapper } from "src/components/ModalWrapper";
import { UserModalProps } from "../../types";

export const DeleteUserModal = ({
  isOpen,
  setIsOpen,
  row,
  setSelectedRow,
  handleDeleteUser,
  showAlert,
}: UserModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async () => {
    try {
      if (!row) return;
      const res = await deleteUser(row.id);
      if (res) {
        handleDeleteUser?.(row.id);
        handleCloseModal();
        showAlert({
          message: "User deleted successfully",
          severity: "success",
        });
      }
    } catch (error) {
      console.error(error);
      showAlert({ message: "Something went wrong", severity: "error" });
    }
  };
  return (
    <ModalWrapper
      open={isOpen}
      onClose={handleCloseModal}
      onSave={handleSave}
      title="Delete User"
      actionBtnTitle="Delete"
      isDelete
    >
      <Typography>
        Are you sure you want to delete this user? This action cannot be undone.
      </Typography>
    </ModalWrapper>
  );
};
