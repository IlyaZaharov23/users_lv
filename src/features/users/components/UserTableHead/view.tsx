"use client";

import { TableCell, TableRow } from "@mui/material";
import { UserType } from "../../types";
import { getUserKeys } from "../../utils/getUserKeys";
import { styles } from "./styles";

export const UserTableHead = ({ user }: { user: UserType }) => {
  const tableHeadItems = getUserKeys(user);
  return (
    <TableRow>
      {tableHeadItems.map((headItem, index) => (
        <TableCell
          key={headItem}
          align={index === 0 ? "left" : "right"}
          sx={styles.headTitle}
        >
          {headItem}
        </TableCell>
      ))}
    </TableRow>
  );
};
