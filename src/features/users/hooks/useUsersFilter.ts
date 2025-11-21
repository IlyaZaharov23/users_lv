import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SEARCH_FILTERS } from "../constants/searchFilters";
import { SearchFiltersType } from "../components/UsersTable/types";
import { UserType } from "../types";
import { useDebounce } from "./useDebounce";

export const useUsersFilter = () => {
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );
  const [selectedFilter, setSelectedFilter] = useState<SearchFiltersType>(
    SEARCH_FILTERS.NAME
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const debouncedValue = useDebounce(searchValue, 500);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearSearchField = () => {
    setSearchValue("");
  };

  const handleChangeFilter = (e: SelectChangeEvent<SearchFiltersType>) => {
    setSelectedFilter(e.target.value as SearchFiltersType);
  };

  const handleChangeCity = (e: SelectChangeEvent<string>) => {
    setSelectedCity(e.target.value);
  };

  const handleSelectCompany =
    (company: string) =>
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setSelectedCompanies((prev) =>
        checked ? [...prev, company] : prev.filter((c) => c !== company)
      );
    };

  const getFilteredUsers = (users: UserType[]) => {
    return users.filter((user) => {
      const matchesCity = selectedCity
        ? user.address?.city === selectedCity
        : true;

      const matchesCompany =
        selectedCompanies.length > 0
          ? selectedCompanies.includes(user.company?.name ?? "")
          : true;

      let matchesSearch = true;
      if (debouncedValue) {
        const value = debouncedValue.toLowerCase();

        if (selectedFilter === SEARCH_FILTERS.NAME) {
          matchesSearch = user.name.toLowerCase().includes(value);
        } else if (selectedFilter === SEARCH_FILTERS.EMAIL) {
          matchesSearch = user.email.toLowerCase().includes(value);
        }
      }

      return matchesCity && matchesCompany && matchesSearch;
    });
  };

  const clearSelectedCity = () => {
    setSelectedCity(undefined);
  };

  const clearAllFilters = () => {
    setSelectedCity(undefined);
    setSelectedCompanies([]);
    setSelectedFilter(SEARCH_FILTERS.NAME);
    setSearchValue("");
  };

  return {
    selectedCity,
    selectedFilter,
    selectedCompanies,
    searchValue,
    handleChangeCity,
    handleChangeFilter,
    handleSelectCompany,
    handleSearchValueChange,
    getFilteredUsers,
    clearSelectedCity,
    clearAllFilters,
    clearSearchField,
  };
};
