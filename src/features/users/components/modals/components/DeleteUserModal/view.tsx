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
  setCurrentUsers,
  clearAllFilters,
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
      clearAllFilters();
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
