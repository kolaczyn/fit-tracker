import Nutrients from '../../models/Nutrients';

describe('Nutrients class', () => {
  test('if the add method works properly', () => {
    const banana = new Nutrients(105, 0.389, 27, 1);
    const apple = new Nutrients(91, 0.273, 24, 0.482);
    const bananaPlusApple = banana.add(apple);
    // console.log(banana, apple)
    expect(bananaPlusApple.calories).toBe(196);
    expect(bananaPlusApple.fat).toEqual(0.662);
    expect(bananaPlusApple.carbs).toEqual(51);
    expect(bananaPlusApple.protein).toEqual(1.482);
    // expect(bananaPlusApple.calories).toEqual(new Nutrients(196, 0.662, 51, 1.482));
  });
  test('initialFormState', () => {
    const cokeForm = Nutrients.initialFormState();
    expect(cokeForm.calories).toBe('');
    expect(cokeForm.fat).toEqual('');
    expect(cokeForm.carbs).toEqual('');
    expect(cokeForm.protein).toEqual('');
  });

  test('newNutrientsFromString', () => {
    const cokeForm = Nutrients.initialFormState();
    cokeForm.calories = '93';
    cokeForm.fat = '0';
    cokeForm.carbs = '26';
    cokeForm.protein = '0';

    const coke = Nutrients.newNutrientsFromString(cokeForm);

    expect(coke.calories).toBe(93);
    expect(coke.fat).toEqual(0);
    expect(coke.carbs).toEqual(26);
    expect(coke.protein).toEqual(0);
  });
});
