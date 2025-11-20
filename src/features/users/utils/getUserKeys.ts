import { UserType } from "../types";

export const getUserKeys = (user: UserType): string[] => {
  const keys = Object.keys(user);
  keys.push("actions");
  return keys.filter((item) => item !== "id");
};
