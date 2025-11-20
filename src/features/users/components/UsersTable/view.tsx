"use client";

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
import { UserActionsMenu } from "../UserActionsMenu/view";
import { useDropdownActions } from "../../hooks/useDropdownActions";
import { useState } from "react";

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
  } = useUsersFilter();

  const { rowMenu, isOpen, openMenu, closeMenu, selectedRow, setSelectedRow } =
    useDropdownActions();

  return (
    <Box>
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
      />
    </Box>
  );
};
