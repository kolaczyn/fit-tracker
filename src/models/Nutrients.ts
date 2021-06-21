import * as Yup from 'yup';
import { NutrientsI } from '../customTypes';

export default class Nutrients implements NutrientsI<number> {
  constructor(
    public calories: number = 0,
    public fat: number = 0,
    public carbs: number = 0,
    public protein: number = 0
  ) {}
  add = (other: Nutrients) => {
    return new Nutrients(
      this.calories + other.calories,
      this.fat + other.fat,
      this.carbs + other.carbs,
      this.protein + other.protein
    );
  };
  static newNutrientsFromString = (other: NutrientsI<string>): Nutrients => {
    const out = new Nutrients();
    let something: keyof NutrientsI<string>;
    for (something in other) {
      out[something] = Number(other[something]);
    }
    return out;
  };
  static initialFormState = () => ({
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  });
  static yupValidationSchema = (isAllRequired: boolean = true) =>
    isAllRequired
      ? Yup.object({
          calories: Yup.number()
            .min(0)
            .required('Calories is a required field'),
          fat: Yup.number().min(0).required('Fat is a required field'),
          carbs: Yup.number().min(0).required('Carbs is a required field'),
          protein: Yup.number().min(0).required('Protein is a required field'),
        })
      : Yup.object({
          calories: Yup.number().min(0),
          fat: Yup.number().min(0),
          carbs: Yup.number().min(0),
          protein: Yup.number().min(0),
        });
}
