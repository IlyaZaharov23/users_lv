export type UserCompanySelectorProps = {
  companies: string[];
  selectedCompany: string | undefined;
  handleChangeCompany: (
    company: string
  ) => (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};
