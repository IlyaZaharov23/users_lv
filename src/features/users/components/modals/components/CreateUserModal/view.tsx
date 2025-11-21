import { TextField as Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalWrapper } from "src/components/ModalWrapper";
import { createUser } from "src/utils/UsersUtil";
import { userSchema } from "src/features/users/schemas/userSchema";
import { FormValues } from "../../types";
import { CreateUserModalProps } from "./types";

export const CreateUserModal = ({
  isOpen,
  setIsOpen,
  lastUserId,
  handleAddUser,
}: CreateUserModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: { name: "" },
      address: { city: "" },
    },
  });
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSave = handleSubmit(async (data) => {
    await createUser({ id: lastUserId + 1, ...data });
    handleAddUser({ id: lastUserId + 1, ...data });
    setIsOpen(false);
  });

  const fields = [
    { label: "Name", name: "name", error: errors.name },
    { label: "Email", name: "email", error: errors.email },
    { label: "Phone", name: "phone", error: errors.phone },
    { label: "Company", name: "company.name", error: errors.company?.name },
    { label: "City", name: "address.city", error: errors.address?.city },
  ] as const;

  return (
    <ModalWrapper
      title="Create User"
      actionBtnTitle="Create"
      open={isOpen}
      onClose={handleCloseModal}
      onSave={handleSave}
    >
      {fields.map(({ label, name, error }) => (
        <Input
          key={name}
          label={label}
          fullWidth
          margin="normal"
          {...register(name)}
          error={!!error}
          helperText={error?.message}
        />
      ))}
    </ModalWrapper>
  );
};
