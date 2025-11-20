"use client";

import { Box, Checkbox, Typography } from "@mui/material";
import { UserCompanySelectorProps } from "./types";
import { styles } from "./styles";

export const UserCompanySelector = ({
  companies,
  selectedCompany,
  handleChangeCompany,
}: UserCompanySelectorProps) => {
  return (
    <Box sx={styles.selectorWrapper}>
      {companies.map((company) => (
        <Box key={company} sx={styles.companySelectorWrapper}>
          <Checkbox
            checked={selectedCompany === company}
            onChange={handleChangeCompany(company)}
          />
          <Typography>{company}</Typography>
        </Box>
      ))}
    </Box>
  );
};
