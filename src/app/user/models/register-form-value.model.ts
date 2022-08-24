export interface RegisterFormValueModel {
  personalInfo: PersonalInfo;
  contactPreference: string;
  email: Email;
  loginInfo: LoginInfo;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  postalCode: string;
  street: string;
  houseNumber: string;
  box: string;
  phone: string;
}

export interface Email {
  email: string;
  confirm: string;
}

export interface LoginInfo {
  password: string;
  confirmPassword: string;

}


