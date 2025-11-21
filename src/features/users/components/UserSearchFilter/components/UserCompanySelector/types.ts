export type UserCompanySelectorProps = {
  companies: string[];
  selectedCompanies: string[];
  handleSelectCompany: (
    company: string
  ) => (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  // handleChangeCompany: (
  //   company: string
  // ) => (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};
