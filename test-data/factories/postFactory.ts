import { faker } from "@faker-js/faker";

export interface Post {
  title: string;
  body: string;
  userId: number;
}

export function createPost(): Post {
   return {
    title: faker.person.jobTitle(),
    body: faker.lorem.lines(1),
    userId: faker.number.int({ min: 1, max: 999 })
  }
}