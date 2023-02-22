import { expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { LOGIN_API } from "./RestContants";


export class LoginApi {

    constructor() {

    }

    async generateAccessToken(
        email: string = "DX1193111111@testacc.com",
        password: string = "testen#1"
      ): Promise<string> {
         const apiRequestContext = await request.newContext({
            baseURL: 'https://api.realworld.io/api',
            ignoreHTTPSErrors: true
         });

          const response = await apiRequestContext.post(LOGIN_API, {
            data: {
              "user":{
                "email": email,
                "password": password
              }
            }         
          }) 
          await expect(response.status()).toEqual(StatusCodes.OK);
          const responseBody = await response.json();
          return responseBody.user.token;
      }
}