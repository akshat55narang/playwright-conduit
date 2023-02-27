import { APIRequestContext, request } from "playwright-core";
import { API_BASE_URL } from "../constants/RestContants";
import { LoginApi } from "./LoginApi";

export class BaseApi {
    protected readonly loginApi: LoginApi = new LoginApi();

    async baseRequest(): Promise<APIRequestContext> {
        const accessToken = await this.loginApi.generateAccessToken();
        
        return await request.newContext({
          baseURL: API_BASE_URL,
          ignoreHTTPSErrors: true,
          extraHTTPHeaders: {
            'Authorization': `Token ${accessToken}`
          }
        });
      }
}