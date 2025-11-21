import { z } from "zod";
import { userSchema } from "../../../schemas/userSchema";
import { UserType } from "../../../types";

export type UserModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  row: UserType | null;
  setSelectedRow: (row: UserType | null) => void;
  handleDeleteUser?: (userId: number) => void;
  handleUpdateUser?: (user: UserType) => void;
};

export type FormValues = z.infer<typeof userSchema>;
