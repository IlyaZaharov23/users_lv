import { SelectChangeEvent } from "@mui/material";

export type UserCitySelectorProps = {
  selectedCity: string | undefined;
  handleChangeCity: (e: SelectChangeEvent<string>) => void;
  cities: string[];
  clearSelectedCity: () => void;
};
