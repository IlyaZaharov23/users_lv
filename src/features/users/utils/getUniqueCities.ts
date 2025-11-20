import { UserType } from "../types";

export const getUniqueCities = (users: UserType[]): string[] => {
  const cities = new Set<string>();
  users.forEach((user) => {
    cities.add(user.address.city);
  });
  return Array.from(cities);
};
