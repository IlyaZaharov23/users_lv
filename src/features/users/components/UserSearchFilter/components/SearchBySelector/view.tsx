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
} from "@mui/material";
import { styles } from "./styles";
import { SearchBySelectorProps } from "./types";
import { SEARCH_FILTERS } from "src/features/users/constants/searchFilters";

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
}: SearchBySelectorProps) => {
  return (
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
              <ClearOutlined />
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
  );
};
