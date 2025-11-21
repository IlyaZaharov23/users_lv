import { Box, Button, TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import usersEmptyState from "src/assets/usersEmptyState.svg";
import { styles } from "./styles";

export const UsersEmptyState = ({
  handleOpenModal,
}: {
  handleOpenModal: () => void;
}) => {
  return (
    <>
      <TableRow>
        <TableCell colSpan={999} sx={styles.tableCell}>
          <Box sx={styles.placeholderWrapper}>
            <Image src={usersEmptyState} alt="users-list-empty" width={200} />
            <Typography>
              No users yet — add a new one to get started.
            </Typography>
            <Button variant="contained" onClick={handleOpenModal}>
              Create User
            </Button>
          </Box>
        </TableCell>
      </TableRow>
    </>
  );
};
