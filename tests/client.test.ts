import axios from "axios";

import { Aura } from "../src/client";

jest.mock("axios");
const mockCreate = axios.create as jest.Mock;
const mockGet = axios.get as jest.Mock;

describe("Aura client", () => {
  let aura: Aura;
  beforeEach(() => {
    aura = new Aura("token");
  });

  beforeAll(() => {
    mockCreate.mockReturnThis();
  });

  it("should be defined", () => {
    expect(aura).toBeDefined();
  });

  it("retrieves personal info", async () => {
    const response = {
      data: {
        age: 123,
        weight: 73.0,
        height: 181,
        gender: "male",
        email: "bob@example.com",
      },
    };
    mockGet.mockResolvedValueOnce(response);

    const data = await aura.userInfo();

    expect(data).toEqual(response.data);
  });
});
