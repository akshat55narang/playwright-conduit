//@ts-check

import {test, expect, APIRequest, APIRequestContext } from "@playwright/test";
import routes from "../fixtures/routes";
import { StatusCodes } from 'http-status-codes';
import { UserApi } from "../rest/UserApi";


for (const route in routes) {
    test(`${route} Route should have title ${route} — Conduit`, async ({page}) => {
        await page.goto(routes[route]);
        const title = route.replace('_', ' ').replace(route.charAt(0), route.charAt(0).toUpperCase());
        await expect(page).toHaveTitle(`${title} — Conduit`);
    });
}


test('create token', async ({ playwright, page, request })=> {
    // let apiContext: APIRequestContext = await playwright.request.newContext({
    //     baseURL: 'https://api.realworld.io/api',
    // });
    // const token = await apiContext.post('/api/users', {
    //     data: {
    //         "user":{
    //           "username": "DX1193111111",
    //           "email": "DX1193111111@testacc.com",
    //           "password": "testen#1"
    //         }
    //       }
    // });
    // await expect(token).toBeTruthy();
    // await expect(token.status()).toEqual(StatusCodes.OK)
    // const response = await token.json();
    // console.log(response)
    // const accessToken = response.token;
    const userApi = new UserApi();
    await userApi.getUser();

    
});