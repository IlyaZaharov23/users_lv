import { UserModalProps } from "../../types";

export type CreateUserModalProps = Omit<
  UserModalProps,
  "row" | "setSelectedRow"
> & {
  lastUserId: number;
};
