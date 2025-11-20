import { DropdownWrapper } from "@/src/components/DropdownWrapper/view";
import { UserActionsMenuProps } from "./types";

export const UserActionsMenu = ({
  open,
  anchorEl,
  handleClose,
}: UserActionsMenuProps) => {
  const editUser = () => {};

  const deleteUser = () => {};
  const dropdownItems = [
    {
      value: "Edit",
      title: "Edit",
      onClick: editUser,
    },
    {
      value: "Delete",
      title: "Delete",
      onClick: deleteUser,
    },
  ];

  return (
    <DropdownWrapper
      items={dropdownItems}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
    />
  );
};
