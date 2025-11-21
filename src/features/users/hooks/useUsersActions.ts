import { useState } from "react";
import { UserType } from "../types";
import { getUniqueCompanies } from "../utils/getUniqueCompanies";

export const useUserActions = (
  users: UserType[],
  clearAllFilters: () => void
) => {
  const [currentUsers, setCurrentUsers] = useState<UserType[]>(users);
  const [allCompanies, setAllCompanies] = useState(getUniqueCompanies(users));

  const ensureCompanyExists = (companyName: string) => {
    setAllCompanies((prev) => {
      if (prev.includes(companyName)) return prev;
      return [...prev, companyName];
    });
  };

  const handleAddUser = (newUser: UserType) => {
    setCurrentUsers((prev) => [newUser, ...prev]);
    ensureCompanyExists(newUser.company.name);
  };

  const handleUpdateUser = (updatedUser: UserType) => {
    setCurrentUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    ensureCompanyExists(updatedUser.company.name);
  };

  const handleDeleteUser = (userId: number) => {
    setCurrentUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleResetFilters = () => {
    clearAllFilters();

    const unique = Array.from(
      new Set(currentUsers.map((user) => user.company.name))
    );

    setAllCompanies(unique);
  };

  return {
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handleResetFilters,
    allCompanies,
    currentUsers,
  };
};
