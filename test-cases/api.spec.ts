import { test, expect } from '../fixtures/index';

const newPost = {
  title: 'QA Automation Post',
  body: 'Created by Playwright API test',
  userId: 312
};

test.describe('API Tests', () => {
        
    test.beforeEach(async ({}, testInfo) => {
        console.log(`Running: ${testInfo.title}`);
    });

    test.afterEach(async ({}, testInfo) => {
        console.log(`Status: ${testInfo.status}`);
    });

    test('GET users', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/users');
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toBeInstanceOf(Array);  
    });

    test('POST create user', async ({ request }) => {
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: newPost
        });
        expect(response.status()).toBe(201);
        const body = await response.json();

        expect(body.userId).toBeDefined();
        expect(body.userId).toBe(newUser.userId);
        expect(body).toMatchObject(newUser);
    });

    test('DELETE user', async ({ request }) => {
        const response = await request.delete('https://jsonplaceholder.typicode.com/posts/101');
        expect(response.status()).toBe(200);
    });
});
