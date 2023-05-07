import { expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { API_BASE_URI, LOGIN_RESOURCE } from "../constants/RestContants";

export class LoginClient {

    async generateAccessToken(
        email = "DX1193111111@testacc.com",
        password = "testen#1"
      ): Promise<string> {
         const apiRequestContext = await request.newContext({
            baseURL: API_BASE_URI,
            ignoreHTTPSErrors: true
         });

         console.log('');
          const response = await apiRequestContext.post(LOGIN_RESOURCE, {
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
