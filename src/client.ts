import axios, { AxiosInstance } from "axios";

import { UserInfo } from "./types";

export class Aura {
  private readonly token: string;
  private readonly client: AxiosInstance;

  constructor(token: string) {
    this.token = token;
    this.client = axios.create({
      baseURL: "https://api.ouraring.com/v1",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      timeout: 5000,
    });
  }

  private async _get<T>(path: string): Promise<T> {
    try {
      const response = await this.client.get(path);
      return response.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async userInfo(): Promise<UserInfo> {
    return this._get<UserInfo>("/userinfo");
  }
}
