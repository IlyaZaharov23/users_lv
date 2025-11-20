import { z } from "zod";
import { userSchema } from "../../../schemas/userSchema";
import { UserType } from "../../../types";

export type UserModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  row: UserType | null;
  setSelectedRow: (row: UserType | null) => void;
  setCurrentUsers: (users: UserType[]) => void;
  clearAllFilters: () => void;
};

export type FormValues = z.infer<typeof userSchema>;
