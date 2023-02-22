import { APIRequest, APIRequestContext, expect, request } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { LoginApi } from "./LoginApi";
import { LOGIN_API, PROFILES_API, USERS_API, USER_API } from "../constants/RestContants";
import { BaseApi } from "./BaseApi";

export class UserApi extends BaseApi {
    
    constructor() {
        super();
    }

    async createUserIfNotExisting(
        username: string = 'DX1193111111',
        email: string = 'DX1193111111@testacc.com',
        password: string = 'testen#1'
    ) {
      if(!await this.isUserExisting(username)) {
        
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
    }

    async isUserExisting(username: string): Promise<boolean> {
      const response = await (await this.baseRequest()).get(`${PROFILES_API}/${username}`);
      await expect(response.status()).toEqual(StatusCodes.OK);
      return ((await response.json()).profile.username === username);
  }

    async getCurrentUser() {
      const response = await (await this.baseRequest()).get(USER_API);
      await expect(response.status()).toEqual(StatusCodes.OK);
    }

  }