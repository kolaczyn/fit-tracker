import { Food } from '../customTypes';

const initialFoods: Food[] = [
  {
    name: 'Banana',
    portion: 118,
    id: '0',
    category: 'Fruit',
    nutrients: {
      calories: 105,
      fat: 0.389,
      carbs: 27,
      protein: 1,
    },
  },
  {
    name: 'Apple',
    portion: 91,
    id: '1',
    category: 'Fruit',
    nutrients: {
      calories: 91,
      fat: 0.273,
      carbs: 24,
      protein: 0.482,
    },
  },
  {
    name: 'Avocado',
    portion: 214,
    id: '30',
    category: 'Fruit',
    nutrients: {
      calories: 318,
      fat: 29,
      carbs: 18,
      protein: 4,
    },
  },
  {
    name: 'Hamburger',
    portion: 100,
    id: '69',
    category: 'Junk Food',
    nutrients: {
      calories: 250,
      fat: 9,
      carbs: 31,
      protein: 12,
    },
  },
  {
    name: 'Kaiser roll',
    portion: 55,
    id: 'kajzerka',
    category: 'Bread',
    nutrients: {
      calories: 162.8,
      fat: 1.98,
      carbs: 32.23,
      protein: 4.62,
    },
  },
  {
    name: 'Hard-boiled egg',
    portion: 35,
    id: 'eggboiled',
    category: '',
    nutrients: {
      calories: 54,
      fat: 4,
      carbs: 0.391,
      protein: 4,
    },
  },
  {
    name: 'Fried egg',
    portion: 35,
    id: 'firedegg',
    category: '',
    nutrients: {
      calories: 68,
      fat: 5,
      carbs: 0.29,
      protein: 5,
    },
  },
  {
    name: 'Glass of Coke',
    portion: 247,
    id: 'coke',
    category: '',
    nutrients: {
      calories: 93,
      fat: 0,
      carbs: 26,
      protein: 0,
    },
  },
  {
    name: 'Glass of milk',
    portion: 256,
    id: 'melk',
    category: 'Dairy',
    nutrients: {
      calories: 158,
      fat: 5,
      carbs: 18,
      protein: 10,
    },
  },
];

export default initialFoods;
