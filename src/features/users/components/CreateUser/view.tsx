import { Button } from "@mui/material";
import { useState } from "react";
import { CreateUserModal } from "../modals/components/CreateUserModal";
import { CreateUserProps } from "./types";

export const CreateUser = ({
  lastUserId,
  setCurrentUsers,
}: CreateUserProps) => {
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
          setCurrentUsers={setCurrentUsers}
        />
      )}
    </>
  );
};
