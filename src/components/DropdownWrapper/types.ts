import { MenuProps } from "@mui/material";

type DropdownWrapperItems = {
  title: string;
  value: string;
  onClick: (item: string) => void;
};

export interface DropdownWrapperProps extends MenuProps {
  items: DropdownWrapperItems[];
}
