import axios, { AxiosInstance } from "axios";

import { UserInfo } from "./types";

export class Aura {
  private readonly token: string;
  private readonly client: AxiosInstance;

  constructor(token: string) {
    this.token = token;
    this.client = axios.create({
      baseURL: "https://api.auraring.com/v1",
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      timeout: 5000,
    });
  }

  public async userInfo(): Promise<UserInfo> {
    return this.client.get("/userinfo");
  }
}
