import { AlertColor } from "@mui/material";

type UserCompanyType = {
  name: string;
};

type UserAddressType = {
  city: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: UserCompanyType;
  address: UserAddressType;
};

export type AlertOptions = {
  message: string | React.ReactNode;
  severity?: AlertColor;
};
