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

  it("retrieves sleep data", async () => {
    const response = {
      data: {
        sleep: [
          {
            summary_date: "",
            period_id: 1,
            timezone: 0,
            bedtime_start: "2021-12-11T00:00:00+00:00",
            bedtime_end: "2021-12-11T00:00:00+00:00",
            duration: 0,
            total: 0,
            awake: 0,
            rem: 0,
            light: 0,
            deep: 0,
            hr_lowest: 0,
            hr_average: 0,
            hr_5min: [1, 2, 3],
            efficiency: 0,
            onset_latency: 0,
            midpoint_time: 0,
            restless: 0,
            temperature_delta: 0,
            breath_average: 0,
            score: 0,
            score_total: 0,
            score_rem: 0,
            score_deep: 0,
            score_efficiency: 0,
            score_latency: 0,
            score_disturbances: 0,
            score_alignment: 0,
            hypnogram_5min: "abc",
            rmssd: 0,
            rmssd_5min: [],
            is_longest: 1,
            temperature_deviation: 0,
            bedtime_start_delta: 0,
            bedtime_end_delta: 0,
            midpoint_at_delta: 0,
            temperature_trend_deviation: null,
          },
        ],
      },
    };
    mockGet.mockResolvedValueOnce(response);

    const expected = {
      sleep: [
        {
          summaryDate: "",
          periodId: 1,
          timezone: 0,
          bedtimeStart: "2021-12-11T00:00:00+00:00",
          bedtimeEnd: "2021-12-11T00:00:00+00:00",
          duration: 0,
          total: 0,
          awake: 0,
          rem: 0,
          light: 0,
          deep: 0,
          hrLowest: 0,
          hrAverage: 0,
          hr5min: [1, 2, 3],
          efficiency: 0,
          onsetLatency: 0,
          midpointTime: 0,
          restless: 0,
          temperatureDelta: 0,
          breathAverage: 0,
          score: 0,
          scoreTotal: 0,
          scoreRem: 0,
          scoreDeep: 0,
          scoreEfficiency: 0,
          scoreLatency: 0,
          scoreDisturbances: 0,
          scoreAlignment: 0,
          hypnogram5min: "abc",
          rmssd: 0,
          rmssd5min: [],
          isLongest: 1,
          temperatureDeviation: 0,
          bedtimeStartDelta: 0,
          bedtimeEndDelta: 0,
          midpointAtDelta: 0,
          temperatureTrendDeviation: null,
        },
      ],
    };

    const data = await aura.sleep();

    expect(data.sleep).toBeDefined();
    expect(data.sleep).toHaveLength(1);
    expect(data.sleep).toEqual(expected.sleep);
  });
});
