import { UserType } from "../../types";

export type CreateUserProps = {
  lastUserId: number;
  handleAddUser: (user: UserType) => void;
};
