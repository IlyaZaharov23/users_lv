import { ModalWrapper } from "@/src/components/ModalWrapper";
import { createUser } from "src/utils/UsersUtil";
import { CreateUserModalProps } from "./types";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "src/features/users/schemas/userSchema";
import { TextField as Input } from "@mui/material";

export const CreateUserModal = ({
  isOpen,
  setIsOpen,
  setCurrentUsers,
  lastUserId,
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
    const users = await createUser({ id: lastUserId + 1, ...data });
    setCurrentUsers(users);
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
