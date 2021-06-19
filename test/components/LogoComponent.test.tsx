/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from '../../components/ui/Logo';

describe('<LogoComponent/>', () => {
  it('correctly renders the component', () => {
    const { queryByText } = render(<Logo />, );

    expect(queryByText('Track')).toBeTruthy();
    expect(queryByText('Fit')).toBeTruthy();
  });
});
