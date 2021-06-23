import { ColorScheme, NutrientsI } from '../../customTypes';

const nutrientToColorScheme: Record<keyof NutrientsI<number>, ColorScheme> = {
  calories: 'gray',
  fat: 'red',
  carbs: 'yellow',
  protein: 'green',
};
export default nutrientToColorScheme;