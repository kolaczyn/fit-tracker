/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { BMICalculator } from '../../components/calculator/BMICalculator';
import { StoreProvider } from '../../components/providers/StoreProvider';

describe('<BMICalculator/>', () => {
  it('correctly calculates BMI', async () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <BMICalculator />,
      { wrapper: StoreProvider }
    );

    await act(async () => {
      fireEvent.change(getByLabelText(/height/i), { target: { value: 185 } });
      fireEvent.change(getByLabelText(/weight/i), { target: { value: 86 } });
    });

    await act(async () => {
      fireEvent.click(getByText(/calculate/i));
    });

    expect(getByTestId('calculator-result')).toBeTruthy();
    expect(getByTestId('calculator-result').innerHTML).toMatch(/25.13/);
  });
});
