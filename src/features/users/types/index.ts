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
