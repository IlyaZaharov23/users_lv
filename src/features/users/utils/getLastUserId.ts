import { UserType } from "../types";

export const getLastUserId = (users: UserType[]): number => {
  if (users.length === 0) return 0;
  return Math.max(...users.map((user) => user.id));
};
