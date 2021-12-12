export type Period = {
  start?: string;
  end?: string;
};

export type UserInfo = {
  age: number;
  weight: number;
  height: number;
  gender: string;
  email: string;
};

export type SleepResponse = {
  summary_date: string;
  period_id: number;
  timezone: number;
  bedtime_start: string;
  bedtime_end: string;
  duration: number;
  total: number;
  awake: number;
  rem: number;
  light: number;
  deep: number;
  hr_lowest: number;
  hr_average: number;
  hr_5min: number[];
  efficiency: number;
  onset_latency: number;
  midpoint_time: number;
  restless: number;
  temperature_delta: number;
  breath_average: number;
  score: number;
  score_total: number;
  score_rem: number;
  score_deep: number;
  score_efficiency: number;
  score_latency: number;
  score_disturbances: number;
  score_alignment: number;
  hypnogram_5min: string;
  rmssd: number;
  rmssd_5min: number[];
  is_longest: number; // TODO: not documented
  temperature_deviation: number; // TODO: not documented
  bedtime_start_delta: number; // TODO: not documented
  bedtime_end_delta: number; // TODO: not documented
  midpoint_at_delta: number; // TODO: not documented
  temperature_trend_deviation: unknown; // TODO: not documented
};

export type Sleep = {
  summaryDate: string;
  periodId: number;
  timezone: number;
  bedtimeStart: string;
  bedtimeEnd: string;
  duration: number;
  total: number;
  awake: number;
  rem: number;
  light: number;
  deep: number;
  hrLowest: number;
  hrAverage: number;
  hr5min: number[];
  efficiency: number;
  onsetLatency: number;
  midpointTime: number;
  restless: number;
  temperatureDelta: number;
  breathAverage: number;
  score: number;
  scoreTotal: number;
  scoreRem: number;
  scoreDeep: number;
  scoreEfficiency: number;
  scoreLatency: number;
  scoreDisturbances: number;
  scoreAlignment: number;
  hypnogram5min: string;
  rmssd: number;
  rmssd5min: number[];
  isLongest: number; // TODO: not documented
  temperatureDeviation: number; // TODO: not documented
  bedtimeStartDelta: number; // TODO: not documented
  bedtimeEndDelta: number; // TODO: not documented
  midpointAtDelta: number; // TODO: not documented
  temperatureTrendDeviation: unknown; // TODO: not documented
};

export type ActivityResponse = {
  summary_date: string;
  timezone: number;
  day_start: string;
  day_end: string;
  score: number;
  score_stay_active: number;
  score_move_every_hour: number;
  score_meet_daily_targets: number;
  score_training_frequency: number;
  score_training_volume: number;
  score_recovery_time: number;
  daily_movement: number;
  non_wear: number;
  rest: number;
  inactive: number;
  inactivity_alerts: number;
  low: number;
  medium: number;
  high: number;
  steps: number;
  cal_total: number;
  cal_active: number;
  met_min_inactive: number;
  met_min_low: number;
  // TODO: met_min_medium_plus
  met_min_medium: number;
  met_min_high: number;
  average_met: number;
  class_5min: string;
  met_1min: number[];
  rest_mode_state: number;
  target_calories: number; // TODO: not documented
  target_km: number; // TODO: not documented
  target_miles: number; // TODO: not documented
  to_target_km: number; // TODO: not documented
  to_target_miles: number; // TODO: not documented
  total: number; // TODO: not documented
};

export type Activity = {
  summaryDate: string;
  timezone: number; // TODO: not documented
  dayStart: string;
  dayEnd: string;
  score: number;
  scoreStayActive: number;
  scoreMoveEveryHour: number;
  scoreMeetDailyTargets: number;
  scoreTrainingFrequency: number;
  scoreTrainingVolume: number;
  scoreRecoveryTime: number;
  dailyMovement: number;
  nonWear: number;
  rest: number;
  inactive: number;
  inactivityAlerts: number;
  low: number;
  medium: number;
  high: number;
  steps: number;
  calTotal: number;
  calActive: number;
  metMinInactive: number;
  metMinLow: number;
  // TODO: met_min_medium_plus
  metMinMedium: number;
  metMinHigh: number;
  averageMet: number;
  class5min: string;
  met1min: number[];
  restModeState: number;
  targetCalories: number; // TODO: not documented
  targetKm: number; // TODO: not documented
  targetMiles: number; // TODO: not documented
  toTargetKm: number; // TODO: not documented
  toTargetMiles: number; // TODO: not documented
  total: number; // TODO: not documented
};

export type ReadinessResponse = {
  summary_date: string;
  period_id: number;
  score: number;
  score_previous_night: number;
  score_sleep_balance: number;
  score_previous_day: number;
  score_activity_balance: number;
  score_resting_hr: number;
  score_hrv_balance: number;
  score_recovery_index: number;
  score_temperature: number;
  rest_mode_state: number;
};

export type Readiness = {
  summaryDate: string;
  periodId: number;
  score: number;
  scorePreviousNight: number;
  scoreSleepBalance: number;
  scorePreviousDay: number;
  scoreActivityBalance: number;
  scoreRestingHr: number;
  scoreHrvBalance: number;
  scoreRecoveryIndex: number;
  scoreTemperature: number;
  restModeState: number;
};

export type BedtimeResponse = {
  date: string;
  bedtime_window: {
    start: number;
    end: number;
  };
  status: "NOT_ENOUGH_DATA" | "LOW_SLEEP_SCORES" | "IDEAL_BEDTIME_AVAILABLE";
};

export type Bedtime = {
  date: string;
  bedtimeWindow: {
    start: number;
    end: number;
  };
  status: "NOT_ENOUGH_DATA" | "LOW_SLEEP_SCORES" | "IDEAL_BEDTIME_AVAILABLE";
};
