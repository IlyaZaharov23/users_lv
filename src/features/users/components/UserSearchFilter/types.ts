import { UserType } from "../../types";
import { UserCitySelectorProps } from "./components/UserCitySelector/types";
import { SearchBySelectorProps } from "./components/SearchBySelector/types";
import { UserCompanySelectorProps } from "./components/UserCompanySelector/types";

export type UserSearchFilterProps = {
  users: UserType[];
  clearAllFilters: () => void;
} & Omit<UserCitySelectorProps, "cities"> &
  Omit<UserCompanySelectorProps, "companies"> &
  SearchBySelectorProps;
