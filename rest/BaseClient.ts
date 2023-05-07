import { APIRequestContext, request } from "playwright-core";
import { API_BASE_URI } from "../constants/RestContants";
import { LoginClient } from "./LoginClient";

export class BaseClient {
    private readonly loginApi: LoginClient = new LoginClient();

    async baseRequest(): Promise<APIRequestContext> {
        const accessToken = await this.loginApi.generateAccessToken();

        return await request.newContext({
          baseURL: API_BASE_URI,
          ignoreHTTPSErrors: true,
          extraHTTPHeaders: {
            'Authorization': `Token ${accessToken}`
          }
        });
      }
}
