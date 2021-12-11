import axios from "axios";

import { Aura } from "../src/client";

jest.mock("axios");
const getMock = axios.get as jest.Mock;

describe("Aura client", () => {
  let aura: Aura;
  beforeEach(() => {
    aura = new Aura("token");
  });

  it("should be initialized with token", () => {
    expect(aura).toBeDefined();
  });

  it("retrieves personal info", async () => {
    const response = {
      age: 123,
      weight: 73.0,
      height: 181,
      gender: "male",
      email: "bob@example.com",
    };
    getMock.mockResolvedValueOnce(response);
    const data = await aura.userInfo();
    expect(data).toEqual(response);
  });
});
