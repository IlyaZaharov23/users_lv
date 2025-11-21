"use client";

import { useEffect, useMemo } from "react";
import { ModalWrapper } from "src/components/ModalWrapper";
import { TextField as Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "src/features/users/schemas/userSchema";
import { editUser, isEmailExists } from "src/utils/UsersUtil";
import { FormValues } from "../../types";
import { UserModalProps } from "../../types";

export const EditUserModal = ({
  isOpen,
  setIsOpen,
  row,
  setSelectedRow,
  handleUpdateUser,
  showAlert,
}: UserModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
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
    try {
      if (!row) return;
      const isExists = await isEmailExists(data.email, row.id);
      if (isExists) {
        setError("email", {
          type: "manual",
          message: "Email already exists",
        });
        return;
      }
      const res = await editUser({ id: row.id, ...data });
      if (res) {
        handleUpdateUser?.({ id: row.id, ...data });
        handleCloseModal();
        showAlert({
          message: "User updated successfully",
          severity: "success",
        });
      }
    } catch (error) {
      console.error(error);
      showAlert({
        message: "Something went wrong",
        severity: "error",
      });
    }
  });

  const fields = useMemo(
    () =>
      [
        { label: "Name", name: "name", error: errors.name },
        { label: "Email", name: "email", error: errors.email },
        { label: "Phone", name: "phone", error: errors.phone },
        { label: "Company", name: "company.name", error: errors.company?.name },
        { label: "City", name: "address.city", error: errors.address?.city },
      ] as const,
    [errors]
  );

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
