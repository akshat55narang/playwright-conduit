import { expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { API_BASE_URL, LOGIN_API } from "../constants/RestContants";


export class LoginApi {

    constructor() {

    }

    async generateAccessToken(
        email: string = "DX1193111111@testacc.com",
        password: string = "testen#1"
      ): Promise<string> {
         const apiRequestContext = await request.newContext({
            baseURL: API_BASE_URL,
            ignoreHTTPSErrors: true
         });

          const response = await apiRequestContext.post(LOGIN_API, {
            data: {
              "user":{
                "email": email,
                "password": password
              }
            }         
          });
          const responseBody = await response.json();
          await expect(response.status()).toEqual(StatusCodes.OK);
          
          return responseBody.user.token;
      }
}