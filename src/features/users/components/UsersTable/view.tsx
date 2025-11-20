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

export const UsersTable = ({ users }: { users: UserType[] }) => {
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

  return (
    <Box>
      <UserSearchFilter
        users={users}
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
            <UserTableHead user={users[0]} />
          </TableHead>
          <TableBody>
            {getFilteredUsers(users).map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
