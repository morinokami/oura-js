import axios from "axios";

import { Oura } from "../src/client";
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

describe("Oura client", () => {
  let oura: Oura;
  beforeEach(() => {
    oura = new Oura("token");
  });

  beforeAll(() => {
    mockCreate.mockReturnThis();
  });

  it("should be defined", () => {
    expect(oura).toBeDefined();
  });

  it("retrieves personal info", async () => {
    mockGet.mockResolvedValueOnce(userInfoResponse);
    const data = await oura.userInfo();

    expect(data).toEqual(userInfoResponse.data);
  });

  it("retrieves sleep data", async () => {
    mockGet.mockResolvedValueOnce(sleepResponse);
    const data = await oura.sleep();

    expect(data.sleep).toBeDefined();
    expect(data.sleep).toHaveLength(1);
    expect(data.sleep).toEqual(sleepExpected.sleep);
  });

  it("retrieves activity data", async () => {
    mockGet.mockResolvedValueOnce(activityResponse);
    const data = await oura.activity();

    expect(data.activity).toBeDefined();
    expect(data.activity).toHaveLength(1);
    expect(data.activity).toEqual(activityExpected.activity);
  });

  it("retrieves readiness data", async () => {
    mockGet.mockResolvedValueOnce(readinessResponse);
    const data = await oura.readiness();

    expect(data.readiness).toBeDefined();
    expect(data.readiness).toHaveLength(1);
    expect(data.readiness).toEqual(readinessExpected.readiness);
  });

  it("retrieves bedtime data", async () => {
    mockGet.mockResolvedValueOnce(bedtimeResponse);
    const data = await oura.bedtime();

    expect(data.idealBedtimes).toBeDefined();
    expect(data.idealBedtimes).toHaveLength(2);
    expect(data.idealBedtimes).toEqual(bedtimeExpected.idealBedtimes);
  });
});
