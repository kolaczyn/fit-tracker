import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import React, { useState } from 'react';

import { useAppDispatch } from '../redux/hooks';
import { addNutrients } from '../redux/nutrientsSlice';

interface NutrientsInputContainerProps {}

export const NutrientsInputContainer: React.FC<NutrientsInputContainerProps> =
  ({}) => {
    const [calories, setCalories] = useState<number>(0);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addNutrients({ calories, carbs: 0, fat: 0, protein: 0 }));
    };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLeftAddon>Calories:</InputLeftAddon>
            <Input
              value={calories}
              onChange={e => setCalories(parseInt(e.target.value))}
              type="number"
            />
          </InputGroup>
        </form>
      </>
    );
  };
