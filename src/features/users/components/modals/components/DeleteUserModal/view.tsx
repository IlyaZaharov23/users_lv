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
}: UserModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async () => {
    if (row) {
      handleDeleteUser?.(row.id);
      await deleteUser(row.id);
      setIsOpen(false);
    }
  };
  return (
    <ModalWrapper
      open={isOpen}
      onClose={handleCloseModal}
      onSave={handleSave}
      title="Delete User"
      actionBtnTitle="Delete"
    >
      <Typography>
        Are you sure you want to delete this user? This action cannot be undone.
      </Typography>
    </ModalWrapper>
  );
};
