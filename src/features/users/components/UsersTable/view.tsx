"use client";

import { useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Box,
} from "@mui/material";
import type { UserType } from "../../types";
import { UserRow } from "../UserTableRow";
import { UserTableHead } from "../UserTableHead";
import { UserSearchFilter } from "../UserSearchFilter";
import { useUsersFilter } from "../../hooks/useUsersFilter";
import { UserActionsMenu } from "../UserActionsMenu";
import { useDropdownActions } from "../../hooks/useDropdownActions";
import { CreateUser } from "../CreateUser";
import { getUniqueCompanies } from "../../utils/getUniqueCompanies";

export const UsersTable = ({ users }: { users: UserType[] }) => {
  const [currentUsers, setCurrentUsers] = useState<UserType[]>(users);
  const [allCompanies, setAllCompanies] = useState(getUniqueCompanies(users));

  const {
    selectedCity,
    selectedFilter,
    selectedCompanies,
    searchValue,
    handleChangeCity,
    handleChangeFilter,
    handleSelectCompany,
    handleSearchValueChange,
    getFilteredUsers,
    clearSelectedCity,
    clearAllFilters,
    clearSearchField,
  } = useUsersFilter();

  const { rowMenu, isOpen, openMenu, closeMenu, selectedRow, setSelectedRow } =
    useDropdownActions();

  const ensureCompanyExists = (companyName: string) => {
    setAllCompanies((prev) => {
      if (prev.includes(companyName)) return prev;
      return [...prev, companyName];
    });
  };

  const handleAddUser = (newUser: UserType) => {
    setCurrentUsers((prev) => [...prev, newUser]);
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

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <UserSearchFilter
        users={currentUsers}
        selectedCity={selectedCity}
        selectedFilter={selectedFilter}
        selectedCompanies={selectedCompanies}
        searchValue={searchValue}
        handleChangeCity={handleChangeCity}
        handleChangeFilter={handleChangeFilter}
        handleSelectCompany={handleSelectCompany}
        handleSearchValueChange={handleSearchValueChange}
        clearSelectedCity={clearSelectedCity}
        clearSearchField={clearSearchField}
        clearAllFilters={handleResetFilters}
        companies={allCompanies}
      />
      <CreateUser
        lastUserId={currentUsers[currentUsers.length - 1].id}
        handleAddUser={handleAddUser}
      />
      <TableContainer>
        <Table aria-label="users table">
          <TableHead>
            <UserTableHead user={currentUsers[0]} />
          </TableHead>
          <TableBody>
            {getFilteredUsers(currentUsers).map((user) => (
              <UserRow key={user.id} user={user} openMenu={openMenu} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserActionsMenu
        open={isOpen}
        anchorEl={rowMenu.anchorEl}
        handleClose={closeMenu}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        handleUpdateUser={handleUpdateUser}
        handleDeleteUser={handleDeleteUser}
      />
    </Box>
  );
};
