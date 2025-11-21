import { useState } from "react";
import { Button } from "@mui/material";
import { CreateUserModal } from "../modals/components/CreateUserModal";
import { CreateUserProps } from "./types";

export const CreateUser = ({ lastUserId, handleAddUser }: CreateUserProps) => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setCreateModalOpen(true);
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpenModal}>
        Create User
      </Button>
      {createModalOpen && (
        <CreateUserModal
          lastUserId={lastUserId}
          isOpen={createModalOpen}
          setIsOpen={setCreateModalOpen}
          handleAddUser={handleAddUser}
        />
      )}
    </>
  );
};
