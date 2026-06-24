import { faker } from "@faker-js/faker";

export function createUser() {
   return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    username: faker.internet.username(),
    password: faker.internet.password()
  }
}