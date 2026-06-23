import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);  
});

test('POST create user', async ({ request }) => {
    const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'kk@kk.com'
    };
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: newUser
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body);
    expect(body).toMatchObject(newUser);
}