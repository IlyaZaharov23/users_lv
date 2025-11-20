import { UserType } from "../../types";

export type CreateUserProps = {
  lastUserId: number;
  setCurrentUsers: (users: UserType[]) => void;
};
