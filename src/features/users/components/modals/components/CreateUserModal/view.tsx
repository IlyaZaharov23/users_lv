import { TextField as Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalWrapper } from "src/components/ModalWrapper";
import { createUser, isEmailExists } from "src/utils/UsersUtil";
import { userSchema } from "src/features/users/schemas/userSchema";
import { FormValues } from "../../types";
import { CreateUserModalProps } from "./types";

export const CreateUserModal = ({
  isOpen,
  setIsOpen,
  lastUserId,
  handleAddUser,
  showAlert,
}: CreateUserModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
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
    try {
      const isExists = await isEmailExists(data.email);
      if (isExists) {
        setError("email", {
          type: "manual",
          message: "Email already exists",
        });
        return;
      }
      const res = await createUser({ id: lastUserId + 1, ...data });
      if (res) {
        handleAddUser({ id: lastUserId + 1, ...data });
        handleCloseModal();
        showAlert({
          message: "User created successfully",
          severity: "success",
        });
      }
    } catch (error) {
      console.error(error);
      showAlert({ message: "Something went wrong", severity: "error" });
    }
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
