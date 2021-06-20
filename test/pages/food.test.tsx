/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import FoodPage from '../../pages/food';
import { StoreProvider } from '../../components/providers/StoreProvider';

describe('food page', () => {
  it('correctly renders the component', () => {
    const { queryByText } = render(<FoodPage />, {
      wrapper: StoreProvider,
    });

    expect(queryByText('Add Food')).toBeTruthy();
  });
  it('correctly enables and disables the `Consome` button', () => {
    // TODO this test is bad, the values are no longer hardcoded, and I'm using Redux to handle the state
    // it only works because I'm using the same values in the store
    const { getByText, getAllByTestId } = render(<FoodPage />, {
      wrapper: StoreProvider,
    });

    const consumeButton = getByText(/consoom/i);
    expect(consumeButton).toBeDisabled();

    const foodSections = getAllByTestId('food-component');
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
