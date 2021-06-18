/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import FoodPage from './food';

describe('<LogoComponent/>', () => {
  it('correctly renders the component', () => {
    const { queryByText } = render(<FoodPage />);

    expect(queryByText('Add Food')).toBeTruthy();
  });
  it('correctly enables and disables the `Consome` button', () => {
    const { getByText, getAllByTestId } = render(
      <FoodPage />
    );

    const consumeButton = getByText('Consoom Selected');
    expect(consumeButton).toBeDisabled();

    const foodSections = getAllByTestId('food-component');
    console.log(foodSections.length);
    // there might be a lot more idiomatic way of doing this
    const bananaSection = foodSections.find(section =>
      within(section).queryByText('Banana')
    );

    const appleSection = foodSections.find(section =>
      within(section).queryByText('Apple')
    );
    fireEvent.click(bananaSection!);
    fireEvent.click(appleSection!);
    expect(consumeButton).not.toBeDisabled();
    fireEvent.click(consumeButton);
    expect(consumeButton).toBeDisabled();
  });
  // TODO
  // it.only('correctly toggles elements', () => {

  // })
});
