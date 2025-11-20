"use client";

import { Menu, MenuItem } from "@mui/material";
import { DropdownWrapperProps } from "./types";

export const DropdownWrapper = ({
  items,
  open,
  onClose,
  anchorEl,
}: DropdownWrapperProps) => {
  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
      {items.map((item) => (
        <MenuItem
          key={item.value}
          value={item.value}
          onClick={() => item.onClick(item.value)}
        >
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};
