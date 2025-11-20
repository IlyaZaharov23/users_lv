"use client";

import { Box, Button } from "@mui/material";
import { UserCompanySelector } from "./components/UserCompanySelector";
import { SearchBySelector } from "./components/SearchBySelector";
import { UserCitySelector } from "./components/UserCitySelector";
import { getUniqueCompanies } from "../../utils/getUniqueCompanies";
import { UserSearchFilterProps } from "./types";
import { getUniqueCities } from "../../utils/getUniqueCities";
import { styles } from "./styles";

export const UserSearchFilter = ({
  users,
  selectedCity,
  selectedFilter,
  searchValue,
  selectedCompany,
  handleChangeCity,
  handleChangeFilter,
  handleChangeCompany,
  handleSearchValueChange,
  clearSelectedCity,
  clearAllFilters,
  clearSearchField,
}: UserSearchFilterProps) => {
  const companies = getUniqueCompanies(users);
  const cities = getUniqueCities(users);
  return (
    <Box sx={styles.searchFilterWrapper}>
      <Box sx={styles.topSelectorsWrapper}>
        <SearchBySelector
          selectedFilter={selectedFilter}
          handleChangeFilter={handleChangeFilter}
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
          clearSearchField={clearSearchField}
        />
        <UserCitySelector
          selectedCity={selectedCity}
          handleChangeCity={handleChangeCity}
          clearSelectedCity={clearSelectedCity}
          cities={cities}
        />
        <Button variant="contained" onClick={clearAllFilters}>
          Reset Filters
        </Button>
      </Box>
      <UserCompanySelector
        companies={companies}
        selectedCompany={selectedCompany}
        handleChangeCompany={handleChangeCompany}
      />
    </Box>
  );
};
