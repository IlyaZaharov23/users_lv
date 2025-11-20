"use client";

import { ModalWrapper } from "src/components/ModalWrapper";
import { useEffect } from "react";
import { TextField as Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "src/features/users/schemas/userSchema";
import { editUser } from "src/utils/UsersUtil";
import { FormValues } from "../../types";
import { UserModalProps } from "../../types";

export const EditUserModal = ({
  isOpen,
  setIsOpen,
  row,
  setSelectedRow,
  setCurrentUsers,
}: UserModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    if (row) {
      reset({
        name: row.name,
        email: row.email,
        phone: row.phone,
        company: {
          name: row.company.name,
        },
        address: {
          city: row.address.city,
        },
      });
    }
  }, [row, reset]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  const handleSave = handleSubmit(async (data) => {
    if (row) {
      const users = await editUser({ ...data, id: row.id });
      setCurrentUsers(users);
      setIsOpen(false);
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
      title="Edit User"
      actionBtnTitle="Save"
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
