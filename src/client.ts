import axios, { AxiosInstance } from "axios";

import {
  Activity,
  ActivityResponse,
  Bedtime,
  BedtimeResponse,
  Period,
  Readiness,
  ReadinessResponse,
  Sleep,
  SleepResponse,
  UserInfo,
} from "./types";

export class Oura {
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
      if (axios.isAxiosError(e)) {
        if (e.response?.data) {
          // Error from Oura Cloud API
          const { data } = e.response;
          throw new Error(`${data.title} - ${data.detail}`);
        }
        throw new Error(e.message);
      }
      throw e;
    }
  }

  private buildQueryParams(period: Period): string {
    let queryParams = "";
    const { start, end } = period;
    if (start && end) {
      queryParams = `?start=${start}&end=${end}`;
    } else if (start) {
      queryParams = `?start=${start}`;
    } else if (end) {
      queryParams = `?end=${end}`;
    }
    return queryParams;
  }

  public async userInfo(): Promise<UserInfo> {
    return await this._get<UserInfo>("/userinfo");
  }

  public async sleep(period: Period = {}): Promise<{ sleep: Sleep[] }> {
    const queryParams = this.buildQueryParams(period);
    const response = await this._get<{ sleep: SleepResponse[] }>(
      `/sleep${queryParams}`
    );
    const { sleep } = response;

    return {
      sleep: sleep.map(this.convertToSleep),
    };
  }

  public async activity(
    period: Period = {}
  ): Promise<{ activity: Activity[] }> {
    const queryParams = this.buildQueryParams(period);
    const response = await this._get<{ activity: ActivityResponse[] }>(
      `/activity${queryParams}`
    );
    const { activity } = response;

    return {
      activity: activity.map(this.convertToActivity),
    };
  }

  public async readiness(
    period: Period = {}
  ): Promise<{ readiness: Readiness[] }> {
    const queryParams = this.buildQueryParams(period);
    const response = await this._get<{ readiness: ReadinessResponse[] }>(
      `/readiness${queryParams}`
    );
    const { readiness } = response;

    return {
      readiness: readiness.map(this.convertToReadiness),
    };
  }

  public async bedtime(
    period: Period = {}
  ): Promise<{ idealBedtimes: Bedtime[] }> {
    const queryParams = this.buildQueryParams(period);
    const response = await this._get<{ ideal_bedtimes: BedtimeResponse[] }>(
      `/bedtime${queryParams}`
    );
    const { ideal_bedtimes: idealBedtimes } = response;

    return {
      idealBedtimes: idealBedtimes.map(this.convertToBedtime),
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

  private convertToActivity(activity: ActivityResponse): Activity {
    return {
      summaryDate: activity.summary_date,
      timezone: activity.timezone,
      dayStart: activity.day_start,
      dayEnd: activity.day_end,
      score: activity.score,
      scoreStayActive: activity.score_stay_active,
      scoreMoveEveryHour: activity.score_move_every_hour,
      scoreMeetDailyTargets: activity.score_meet_daily_targets,
      scoreTrainingFrequency: activity.score_training_frequency,
      scoreTrainingVolume: activity.score_training_volume,
      scoreRecoveryTime: activity.score_recovery_time,
      dailyMovement: activity.daily_movement,
      nonWear: activity.non_wear,
      rest: activity.rest,
      inactive: activity.inactive,
      inactivityAlerts: activity.inactivity_alerts,
      low: activity.low,
      medium: activity.medium,
      high: activity.high,
      steps: activity.steps,
      calTotal: activity.cal_total,
      calActive: activity.cal_active,
      metMinInactive: activity.met_min_inactive,
      metMinLow: activity.met_min_low,
      metMinMedium: activity.met_min_medium,
      metMinHigh: activity.met_min_high,
      averageMet: activity.average_met,
      class5min: activity.class_5min,
      met1min: activity.met_1min,
      restModeState: activity.rest_mode_state,
      targetCalories: activity.target_calories,
      targetKm: activity.target_km,
      targetMiles: activity.target_miles,
      toTargetKm: activity.to_target_km,
      toTargetMiles: activity.to_target_miles,
      total: activity.total,
    };
  }

  private convertToReadiness(readiness: ReadinessResponse): Readiness {
    return {
      summaryDate: readiness.summary_date,
      periodId: readiness.period_id,
      score: readiness.score,
      scorePreviousNight: readiness.score_previous_night,
      scoreSleepBalance: readiness.score_sleep_balance,
      scorePreviousDay: readiness.score_previous_day,
      scoreActivityBalance: readiness.score_activity_balance,
      scoreRestingHr: readiness.score_resting_hr,
      scoreHrvBalance: readiness.score_hrv_balance,
      scoreRecoveryIndex: readiness.score_recovery_index,
      scoreTemperature: readiness.score_temperature,
      restModeState: readiness.rest_mode_state,
    };
  }

  private convertToBedtime(bedtime: BedtimeResponse): Bedtime {
    return {
      date: bedtime.date,
      bedtimeWindow: {
        start: bedtime.bedtime_window.start,
        end: bedtime.bedtime_window.end,
      },
      status: bedtime.status,
    };
  }
}
