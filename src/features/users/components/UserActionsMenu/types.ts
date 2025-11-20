import { UserType } from "../../types";

export type UserActionsMenuProps = {
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  selectedRow: UserType | null;
  setSelectedRow: (row: UserType | null) => void;
  setCurrentUsers: (users: UserType[]) => void;
  clearAllFilters: () => void;
};
