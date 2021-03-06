// HTML number input's value is a string, so I have to
// treat the nutrients as strings in some parts of the app
// that's the reason for using generic
export type NutrientsI<T extends number | string> = {
  calories: T;
  fat: T;
  carbs: T;
  protein: T;
};

export type BMICalculatorData<T extends string | number> = {
  weight: T;
  height: T;
};

// Formik doesn't seem to like TypeScript's enum
// so I'm just using string enums
export enum ActivityLevel {
  Sendetary = 'Sendetary',
  LightlyActive = 'LightlyActive',
  ModerateActive = 'ModerateActive',
  VeryActive = 'VeryActive',
  ExtremelyActive = 'ExtremelyActive',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}
export enum Units {
  Metric = 'Metric',
  Imperial = 'Imperial',
}

export type TDEECalculatorData<T extends string | number> = {
  activityLevel: ActivityLevel;
  weight: T;
  height: T;
  age: T;
};

export type Metrics = {
  activityLevel: ActivityLevel | null;
  weight: number | null;
  height: number | null;
  age: number | null;
  waist: number | null;
  gender: Gender;
  units: Units;
};

export type Food = {
  name: string;
  category: string;
  id: string;
  portion: number;
  nutrients: NutrientsI<number>;
};

export interface NormalizedIndex<T> {
  byId: Record<string, T>;
  allIds: string[];
}

// Chakra UI's colorSchemes
// I couldn't find one exported, so I put it here
export type ColorScheme =
  | 'whiteAlpha'
  | 'blackAlpha'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'
  | 'purple'
  | 'pink'
  | 'linkedin'
  | 'facebook'
  | 'messenger'
  | 'whatsapp'
  | 'twitter'
  | 'telegram';
