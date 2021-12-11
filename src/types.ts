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
