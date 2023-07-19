//! TODO: to improve with tRPC, monorepo or others to share types between front-end and back-end

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput extends SignInInput {
  firstName: string;
  lastName: string;
}

export interface SignIn {
  access_token: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface City {
  nom: string;
  code: string;
}

export interface ActivityInput {
  name: string;
  city: {
    name: string;
    postalCode: string;
  };
  description: string;
  price: number;
}
