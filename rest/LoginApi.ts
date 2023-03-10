import { expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { API_BASE_URL, LOGIN_API } from "../constants/RestContants";

const authFile = 'playwright/.auth/user.json';
export class LoginApi {

    async generateAccessToken(
        email = "DX1193111111@testacc.com",
        password = "testen#1"
      ): Promise<string> {
         const apiRequestContext = await request.newContext({
            baseURL: API_BASE_URL,
            ignoreHTTPSErrors: true
         });

         console.log('');
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
          await apiRequestContext.storageState({ path: authFile}); 
          return responseBody.user.token;
      }
}