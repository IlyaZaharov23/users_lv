import { UserType } from "../types";

export const getUniqueCompanies = (users: UserType[]): string[] => {
  const companies = new Set<string>();
  users.forEach((user) => {
    companies.add(user.company.name);
  });

  return Array.from(companies);
};
