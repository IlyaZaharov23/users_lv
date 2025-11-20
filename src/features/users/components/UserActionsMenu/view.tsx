"use client";

import { DropdownWrapper } from "@/src/components/DropdownWrapper";
import { UserActionsMenuProps } from "./types";
import { useState } from "react";
import { EditUserModal } from "../modals/components/EditUserModal";
import { DeleteUserModal } from "../modals/components/DeleteUserModal";

export const UserActionsMenu = ({
  open,
  anchorEl,
  handleClose,
  selectedRow,
  setSelectedRow,
  setCurrentUsers,
  clearAllFilters,
}: UserActionsMenuProps) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const editUser = () => {
    setEditModalOpen(true);
    handleClose();
  };
  const deleteUser = () => {
    setDeleteModalOpen(true);
    handleClose();
  };
  const dropdownItems = [
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
  ];

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
          setCurrentUsers={setCurrentUsers}
          clearAllFilters={clearAllFilters}
        />
      )}
      {deleteModalOpen && (
        <DeleteUserModal
          isOpen={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
          row={selectedRow}
          setSelectedRow={setSelectedRow}
          setCurrentUsers={setCurrentUsers}
          clearAllFilters={clearAllFilters}
        />
      )}
    </>
  );
};
