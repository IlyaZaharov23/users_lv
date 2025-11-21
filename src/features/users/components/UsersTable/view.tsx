"use client";

import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Box,
  Button,
} from "@mui/material";
import type { UserType } from "../../types";
import { UserRow } from "../UserTableRow";
import { UserTableHead } from "../UserTableHead";
import { UserSearchFilter } from "../UserSearchFilter";
import { useUsersFilter } from "../../hooks/useUsersFilter";
import { UserActionsMenu } from "../UserActionsMenu";
import { useDropdownActions } from "../../hooks/useDropdownActions";
import { UsersEmptyState } from "../UsersEmptyState";
import { useUserActions } from "../../hooks/useUsersActions";
import { CreateUserModal } from "../modals/components/CreateUserModal";
import { UsersSkeleton } from "../UsersSkeleton";
import { getLastUserId } from "../../utils/getLastUserId";
import { useActionsAlert } from "../../hooks/useActionsAlert";

export const UsersTable = ({ users }: { users: UserType[] }) => {
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

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

  const {
    handleAddUser,
    handleDeleteUser,
    handleResetFilters,
    handleUpdateUser,
    allCompanies,
    currentUsers,
  } = useUserActions(users, clearAllFilters);

  const { showAlert, AlertComponent } = useActionsAlert();

  const handleOpenModal = () => {
    setCreateModalOpen(true);
  };

  const filteredUsers = getFilteredUsers(currentUsers);
  const lastUserId = getLastUserId(currentUsers);

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
      <Button variant="contained" onClick={handleOpenModal}>
        Create User
      </Button>
      <TableContainer>
        <Table aria-label="users table">
          <TableHead>
            <UserTableHead user={currentUsers[0]} />
          </TableHead>
          <TableBody>
            {isLoading ? (
              <UsersSkeleton columns={6} rows={10} />
            ) : filteredUsers.length === 0 ? (
              <UsersEmptyState handleOpenModal={handleOpenModal} />
            ) : (
              filteredUsers.map((user) => (
                <UserRow key={user.id} user={user} openMenu={openMenu} />
              ))
            )}
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
        showAlert={showAlert}
      />
      {createModalOpen && (
        <CreateUserModal
          lastUserId={lastUserId}
          isOpen={createModalOpen}
          setIsOpen={setCreateModalOpen}
          handleAddUser={handleAddUser}
          showAlert={showAlert}
        />
      )}
      {AlertComponent}
    </Box>
  );
};
