type UserCompanyType = {
  name: string;
};

type UserAddressType = {
  city: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: UserCompanyType;
  address: UserAddressType;
};

export type UserModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  row: UserType | null;
  setSelectedRow: (row: UserType | null) => void;
  setCurrentUsers: (users: UserType[]) => void;
};
