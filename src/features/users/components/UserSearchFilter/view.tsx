"use client";

import { Box } from "@mui/material";
import { UserCompanySelector } from "./components/UserCompanySelector";
import { SearchBySelector } from "./components/SearchBySelector";
import { UserCitySelector } from "./components/UserCitySelector";
import { getUniqueCompanies } from "../../utils/getUniqueCompanies";
import { styles } from "./styles";
import { UserSearchFilterProps } from "./types";
import { getUniqueCities } from "../../utils/getUniqueCities";

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
        />
        <UserCitySelector
          selectedCity={selectedCity}
          handleChangeCity={handleChangeCity}
          clearSelectedCity={clearSelectedCity}
          cities={cities}
        />
      </Box>
      <UserCompanySelector
        companies={companies}
        selectedCompany={selectedCompany}
        handleChangeCompany={handleChangeCompany}
      />
    </Box>
  );
};
