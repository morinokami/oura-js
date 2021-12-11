import axios, { AxiosInstance } from "axios";

import { Sleep, SleepResponse, UserInfo } from "./types";

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
    return await this._get<UserInfo>("/userinfo");
  }

  public async sleep(
    start?: string,
    end?: string
  ): Promise<{ sleep: Sleep[] }> {
    let queryParams = "";
    if (start && end) {
      queryParams = `?start=${start}&end=${end}`;
    } else if (start) {
      queryParams = `?start=${start}`;
    } else if (end) {
      queryParams = `?end=${end}`;
    }

    const response = await this._get<{ sleep: SleepResponse[] }>(
      `/sleep${queryParams}`
    );
    const { sleep } = response;

    return {
      sleep: sleep.map(this.convertToSleep),
    };
  }

  private convertToSleep(sleep: SleepResponse): Sleep {
    return {
      summaryDate: sleep.summary_date,
      periodId: sleep.period_id,
      timezone: sleep.timezone,
      bedtimeStart: sleep.bedtime_start,
      bedtimeEnd: sleep.bedtime_end,
      duration: sleep.duration,
      total: sleep.total,
      awake: sleep.awake,
      rem: sleep.rem,
      light: sleep.light,
      deep: sleep.deep,
      hrLowest: sleep.hr_lowest,
      hrAverage: sleep.hr_average,
      hr5min: sleep.hr_5min,
      efficiency: sleep.efficiency,
      onsetLatency: sleep.onset_latency,
      midpointTime: sleep.midpoint_time,
      restless: sleep.restless,
      temperatureDelta: sleep.temperature_delta,
      breathAverage: sleep.breath_average,
      score: sleep.score,
      scoreTotal: sleep.score_total,
      scoreRem: sleep.score_rem,
      scoreDeep: sleep.score_deep,
      scoreEfficiency: sleep.score_efficiency,
      scoreLatency: sleep.score_latency,
      scoreDisturbances: sleep.score_disturbances,
      scoreAlignment: sleep.score_alignment,
      hypnogram5min: sleep.hypnogram_5min,
      rmssd: sleep.rmssd,
      rmssd5min: sleep.rmssd_5min,
      isLongest: sleep.is_longest,
      temperatureDeviation: sleep.temperature_deviation,
      bedtimeStartDelta: sleep.bedtime_start_delta,
      bedtimeEndDelta: sleep.bedtime_end_delta,
      midpointAtDelta: sleep.midpoint_at_delta,
      temperatureTrendDeviation: sleep.temperature_trend_deviation,
    };
  }
}
