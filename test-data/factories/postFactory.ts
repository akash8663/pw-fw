import { faker } from "@faker-js/faker";

export function createPost() {
   return {
    title: faker.person.jobTitle(),
    body: faker.lorem.lines(1),
    userId: faker.number.int({ min: 1, max: 999 })
  }
}