import { useState } from "react";
import { UserType } from "../types";

interface RowMenuState {
  anchorEl: HTMLElement | null;
  rowId: number | null;
}

export const useDropdownActions = () => {
  const [rowMenu, setRowMenu] = useState<RowMenuState>({
    anchorEl: null,
    rowId: null,
  });
  const [selectedRow, setSelectedRow] = useState<UserType | null>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>, row: UserType) => {
    setRowMenu({
      anchorEl: event.currentTarget,
      rowId: row.id,
    });
    setSelectedRow(row);
  };

  const closeMenu = () => {
    setRowMenu({
      anchorEl: null,
      rowId: null,
    });
  };

  const isOpen = Boolean(rowMenu.anchorEl);
  return {
    rowMenu,
    isOpen,
    openMenu,
    closeMenu,
    selectedRow,
    setSelectedRow,
  };
};
