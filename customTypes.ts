// HTML number input's value is a string, so I have to
// treat the nutrients as strings in some parts of the app
// that's the reason for using generic
export type Nutrients<T extends number | string> = {
  calories: T;
  fat: T;
  carbs: T;
  protein: T;
};

export type BMICalculatorData<T extends string | number> = {
  weight: T;
  height: T;
};

export enum ActivityLevel {
  Sendetary = 'Sendetary',
  LightlyActive = 'LightlyActive',
  ModerateActive = 'ModerateActive',
  VeryActive = 'VeryActive',
  ExtremelyActive = 'ExtremelyActive',
}

export type TDEECalculatorData<T extends string | number> = {
  activityLevel: ActivityLevel;
  weight: T;
  height: T;
  age: T;
};
