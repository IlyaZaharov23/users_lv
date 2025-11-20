import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { SEARCH_FILTERS } from "../constants/searchFilters";
import { SearchFiltersType } from "../components/UsersTable/types";
import { UserType } from "../types";

export const useUsersFilter = () => {
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );
  const [selectedFilter, setSelectedFilter] = useState<SearchFiltersType>(
    SEARCH_FILTERS.NAME
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(
    undefined
  );

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChangeFilter = (e: SelectChangeEvent<SearchFiltersType>) => {
    setSelectedFilter(e.target.value as SearchFiltersType);
  };

  const handleChangeCity = (e: SelectChangeEvent<string>) => {
    setSelectedCity(e.target.value);
  };

  const handleChangeCompany =
    (company: string) =>
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setSelectedCompany(checked ? company : undefined);
    };

  const getFilteredUsers = (users: UserType[]) => {
    return users.filter((user) => {
      const matchesCity = selectedCity
        ? user.address?.city === selectedCity
        : true;
      const matchesCompany = selectedCompany
        ? user.company?.name === selectedCompany
        : true;

      let matchesSearch = true;
      if (searchValue) {
        const value = searchValue.toLowerCase();
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
    setSelectedCompany(undefined);
    setSelectedFilter(SEARCH_FILTERS.NAME);
    setSearchValue("");
  };

  return {
    selectedCity,
    selectedFilter,
    selectedCompany,
    searchValue,
    handleChangeCity,
    handleChangeFilter,
    handleChangeCompany,
    handleSearchValueChange,
    getFilteredUsers,
    clearSelectedCity,
    clearAllFilters,
  };
};
