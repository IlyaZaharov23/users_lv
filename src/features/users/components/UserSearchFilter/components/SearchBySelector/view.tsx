"use client";

import { SearchOutlined, ClearOutlined } from "@mui/icons-material";
import {
  Box,
  FormControl,
  TextField as Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { SEARCH_FILTERS } from "src/features/users/constants/searchFilters";
import { SearchBySelectorProps } from "./types";
import { styles } from "./styles";
import { styles as parentStyles } from "../../styles";

const filterItems = [
  {
    value: SEARCH_FILTERS.NAME,
    title: SEARCH_FILTERS.NAME,
  },
  {
    value: SEARCH_FILTERS.EMAIL,
    title: SEARCH_FILTERS.EMAIL,
  },
];

export const SearchBySelector = ({
  selectedFilter,
  handleChangeFilter,
  searchValue,
  handleSearchValueChange,
  clearSearchField,
}: SearchBySelectorProps) => {
  return (
    <Box sx={parentStyles.filterBlockWrapper}>
      <Typography variant="overline">Search</Typography>
      <Box sx={styles.searchWrapper}>
        <Input
          id="search-by-selector-input"
          placeholder={`Enter ${selectedFilter}`}
          value={searchValue}
          onChange={handleSearchValueChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={styles.closeIcon}>
                <ClearOutlined onClick={clearSearchField} />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={styles.selectWrapper}>
          <FormControl fullWidth>
            <InputLabel id={`${selectedFilter}-label`}>
              {selectedFilter}
            </InputLabel>
            <Select
              onChange={handleChangeFilter}
              label={selectedFilter}
              value={selectedFilter}
              labelId={`${selectedFilter}-select-label`}
              id={`${selectedFilter}-select`}
            >
              {filterItems.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
