import { UserType } from "src/features/users/types";
import { UserModalProps } from "../../types";

export type CreateUserModalProps = Omit<
  UserModalProps,
  "row" | "setSelectedRow" | "clearAllFilters"
> & {
  lastUserId: number;
  handleAddUser: (user: UserType) => void;
};
