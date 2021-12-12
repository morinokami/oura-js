import axios from "axios";

import { Aura } from "../src/client";
import {
  activityExpected,
  activityResponse,
  bedtimeExpected,
  bedtimeResponse,
  readinessExpected,
  readinessResponse,
  sleepExpected,
  sleepResponse,
  userInfoResponse,
} from "./fixtures";

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
    mockGet.mockResolvedValueOnce(userInfoResponse);
    const data = await aura.userInfo();

    expect(data).toEqual(userInfoResponse.data);
  });

  it("retrieves sleep data", async () => {
    mockGet.mockResolvedValueOnce(sleepResponse);
    const data = await aura.sleep();

    expect(data.sleep).toBeDefined();
    expect(data.sleep).toHaveLength(1);
    expect(data.sleep).toEqual(sleepExpected.sleep);
  });

  it("retrieves activity data", async () => {
    mockGet.mockResolvedValueOnce(activityResponse);
    const data = await aura.activity();

    expect(data.activity).toBeDefined();
    expect(data.activity).toHaveLength(1);
    expect(data.activity).toEqual(activityExpected.activity);
  });

  it("retrieves readiness data", async () => {
    mockGet.mockResolvedValueOnce(readinessResponse);
    const data = await aura.readiness();

    expect(data.readiness).toBeDefined();
    expect(data.readiness).toHaveLength(1);
    expect(data.readiness).toEqual(readinessExpected.readiness);
  });

  it("retrieves bedtime data", async () => {
    mockGet.mockResolvedValueOnce(bedtimeResponse);
    const data = await aura.bedtime();

    expect(data.idealBedtimes).toBeDefined();
    expect(data.idealBedtimes).toHaveLength(2);
    expect(data.idealBedtimes).toEqual(bedtimeExpected.idealBedtimes);
  });
});
