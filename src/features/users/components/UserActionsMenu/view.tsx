"use client";

import { DropdownWrapper } from "@/src/components/DropdownWrapper/view";
import { UserActionsMenuProps } from "./types";
import { useState } from "react";
import { EditUserModal } from "../EditUserModal";
import { DeleteUserModal } from "../DeleteUserModal";

export const UserActionsMenu = ({
  open,
  anchorEl,
  handleClose,
  selectedRow,
  setSelectedRow,
  setCurrentUsers,
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
        />
      )}
      {deleteModalOpen && (
        <DeleteUserModal
          isOpen={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
          row={selectedRow}
          setSelectedRow={setSelectedRow}
          setCurrentUsers={setCurrentUsers}
        />
      )}
    </>
  );
};
