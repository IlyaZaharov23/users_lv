import { UserType } from "src/features/users/types";
import { UserModalProps } from "../../types";
import { AlertOptions } from "src/features/users/types";

export type CreateUserModalProps = Omit<
  UserModalProps,
  "row" | "setSelectedRow" | "clearAllFilters"
> & {
  lastUserId: number;
  handleAddUser: (user: UserType) => void;
  showAlert: (options: AlertOptions) => void;
};
