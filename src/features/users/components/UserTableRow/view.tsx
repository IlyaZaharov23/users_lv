"use client";

import { TableCell, TableRow } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { UserTableRowProps } from "./types";

export const UserRow = ({ user, openMenu }: UserTableRowProps) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.company.name}</TableCell>
      <TableCell align="right">{user.address.city}</TableCell>
      <TableCell align="right" onClick={(e) => openMenu(e, user)}>
        <MoreVert />
      </TableCell>
    </TableRow>
  );
};
