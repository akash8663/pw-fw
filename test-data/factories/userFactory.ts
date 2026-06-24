import { faker } from "@faker-js/faker";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export function createUser(): User {
   return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    username: faker.internet.username(),
    password: faker.internet.password()
  }
}