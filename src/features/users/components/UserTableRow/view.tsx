"use client";

import { TableCell, TableRow } from "@mui/material";
import { UserType } from "../../types";
import { MoreVert } from "@mui/icons-material";

export const UserRow = ({ user }: { user: UserType }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.email}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.company.name}</TableCell>
      <TableCell align="right">{user.address.city}</TableCell>
      <TableCell align="right">
        <MoreVert />
      </TableCell>
    </TableRow>
  );
};
