"use client";

import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { UserCitySelectorProps } from "./types";
import { CloseOutlined } from "@mui/icons-material";
import { styles } from "./styles";

export const UserCitySelector = ({
  cities,
  selectedCity,
  handleChangeCity,
  clearSelectedCity,
}: UserCitySelectorProps) => {
  return (
    <Box sx={styles.citySelectorWrapper}>
      <FormControl sx={styles.formControl}>
        <InputLabel id={`${selectedCity}-label`}>
          {selectedCity || "Select City"}
        </InputLabel>
        <Select
          labelId={`${selectedCity}-select-label`}
          id={`${selectedCity}-select`}
          label={selectedCity || "Select City"}
          onChange={handleChangeCity}
          value={selectedCity || ""}
          input={
            <OutlinedInput
              startAdornment={
                selectedCity ? (
                  <InputAdornment position="start">
                    <IconButton
                      edge="start"
                      size="small"
                      onClick={clearSelectedCity}
                    >
                      <CloseOutlined fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ) : null
              }
              label="Select City"
            />
          }
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
