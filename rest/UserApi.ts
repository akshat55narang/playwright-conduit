import { APIRequest, APIRequestContext, expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { LoginApi } from "./LoginApi";
import { LOGIN_API, USERS_API, USER_API } from "./RestContants";

export class UserApi {
    readonly apiRequestContext: APIRequestContext;
    readonly loginApi: LoginApi = new LoginApi();

    constructor() {
        
    }

    async baseRequest(): Promise<APIRequestContext> {
      const accessToken = await this.loginApi.generateAccessToken();
      return await request.newContext({
        baseURL: 'https://api.realworld.io/api',
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: {
          'Authorization': `Token ${accessToken}`
        }
      });
    }

    async registerUser(
        username: string,
        email: string,
        password: string
    ) {
         const apiResponse = await (await this.baseRequest()).post(USERS_API, {
            data: {
                "user":{
                  "username": username,
                  "email": email,
                  "password": password
                }
              }
        });
        await expect(apiResponse.status()).toEqual(StatusCodes.OK);
    }

    async getUser() {
      const response = await (await this.baseRequest()).get(USER_API);
      await expect(response.status()).toEqual(StatusCodes.OK);
    }
  }