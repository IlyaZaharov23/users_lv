"use client";

import { ModalWrapper } from "src/components/ModalWrapper";
import { UserModalProps } from "../../types";
import { Typography } from "@mui/material";
import { deleteUser } from "src/utils/UsersUtil";

export const DeleteUserModal = ({
  isOpen,
  setIsOpen,
  row,
  setSelectedRow,
  setCurrentUsers,
}: UserModalProps) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  const handleSave = async () => {
    if (row) {
      const users = await deleteUser(row.id);
      setCurrentUsers(users);
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
