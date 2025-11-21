"use client";

import { useState, useMemo, useCallback } from "react";
import { DropdownWrapper } from "src/components/DropdownWrapper";
import { UserActionsMenuProps } from "./types";
import { EditUserModal } from "../modals/components/EditUserModal";
import { DeleteUserModal } from "../modals/components/DeleteUserModal";

export const UserActionsMenu = ({
  open,
  anchorEl,
  handleClose,
  selectedRow,
  setSelectedRow,
  handleDeleteUser,
  handleUpdateUser,
  showAlert,
}: UserActionsMenuProps) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const editUser = useCallback(() => {
    setEditModalOpen(true);
    handleClose();
  }, [handleClose]);

  const deleteUser = useCallback(() => {
    setDeleteModalOpen(true);
    handleClose();
  }, [handleClose]);

  const dropdownItems = useMemo(
    () => [
      {
        value: "Edit",
        title: "Edit",
        onClick: editUser,
      },
      {
        value: "Delete",
        title: "Delete",
        onClick: deleteUser,
      },
    ],
    [editUser, deleteUser]
  );

  return (
    <>
      {open && (
        <DropdownWrapper
          items={dropdownItems}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        />
      )}
      {editModalOpen && (
        <EditUserModal
          isOpen={editModalOpen}
          setIsOpen={setEditModalOpen}
          row={selectedRow}
          setSelectedRow={setSelectedRow}
          handleUpdateUser={handleUpdateUser}
          showAlert={showAlert}
        />
      )}
      {deleteModalOpen && (
        <DeleteUserModal
          isOpen={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
          row={selectedRow}
          setSelectedRow={setSelectedRow}
          handleDeleteUser={handleDeleteUser}
          showAlert={showAlert}
        />
      )}
    </>
  );
};
