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

export const UsersTable = ({ users }: { users: UserType[] }) => {
  const [currentUsers, setCurrentUsers] = useState<UserType[]>(users);

  const {
    selectedCity,
    selectedFilter,
    selectedCompany,
    searchValue,
    handleChangeCity,
    handleChangeFilter,
    handleChangeCompany,
    handleSearchValueChange,
    getFilteredUsers,
    clearSelectedCity,
    clearAllFilters,
    clearSearchField,
  } = useUsersFilter();

  const { rowMenu, isOpen, openMenu, closeMenu, selectedRow, setSelectedRow } =
    useDropdownActions();

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <UserSearchFilter
        users={currentUsers}
        selectedCity={selectedCity}
        selectedFilter={selectedFilter}
        selectedCompany={selectedCompany}
        searchValue={searchValue}
        handleChangeCity={handleChangeCity}
        handleChangeFilter={handleChangeFilter}
        handleChangeCompany={handleChangeCompany}
        handleSearchValueChange={handleSearchValueChange}
        clearSelectedCity={clearSelectedCity}
        clearSearchField={clearSearchField}
        clearAllFilters={clearAllFilters}
      />
      <CreateUser
        lastUserId={currentUsers[currentUsers.length - 1].id}
        setCurrentUsers={setCurrentUsers}
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
        setCurrentUsers={setCurrentUsers}
        clearAllFilters={clearAllFilters}
      />
    </Box>
  );
};
