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
  Typography,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { UserCitySelectorProps } from "./types";
import { styles } from "./styles";
import { styles as parentStyles } from "../../styles";

export const UserCitySelector = ({
  cities,
  selectedCity,
  handleChangeCity,
  clearSelectedCity,
}: UserCitySelectorProps) => {
  return (
    <Box sx={parentStyles.filterBlockWrapper}>
      <Typography variant="overline">Location</Typography>
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
    </Box>
  );
};
