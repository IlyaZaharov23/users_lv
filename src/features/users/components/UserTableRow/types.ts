import { UserType } from "../../types";

export type UserTableRowProps = {
  user: UserType;
  openMenu: (e: React.MouseEvent<HTMLElement>, row: UserType) => void;
};
