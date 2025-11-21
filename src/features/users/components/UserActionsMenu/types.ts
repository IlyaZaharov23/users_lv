import { UserType } from "../../types";

export type UserActionsMenuProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  selectedRow: UserType | null;
  setSelectedRow: (row: UserType | null) => void;
  handleUpdateUser: (user: UserType) => void;
  handleDeleteUser: (userId: number) => void;
};
