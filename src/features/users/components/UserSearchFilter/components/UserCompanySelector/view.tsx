"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import { UserCompanySelectorProps } from "./types";
import { styles } from "./styles";
import { styles as parentStyles } from "../../styles";

export const UserCompanySelector = ({
  companies,
  selectedCompanies,
  handleSelectCompany,
}: UserCompanySelectorProps) => {
  return (
    <Box sx={parentStyles.filterBlockWrapper}>
      <Typography variant="overline">Organizations</Typography>
      <Box sx={styles.selectorWrapper}>
        {companies.map((company) => (
          <Box key={company} sx={styles.companySelectorWrapper}>
            <Checkbox
              checked={selectedCompanies.includes(company)}
              onChange={handleSelectCompany(company)}
            />
            <Typography>{company}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
