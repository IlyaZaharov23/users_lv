import { SelectChangeEvent } from "@mui/material";
import { SearchFiltersType } from "../../../UsersTable/types";

export type SearchBySelectorProps = {
  selectedFilter: SearchFiltersType;
  handleChangeFilter: (e: SelectChangeEvent<SearchFiltersType>) => void;
  searchValue: string;
  handleSearchValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearchField: () => void;
};
