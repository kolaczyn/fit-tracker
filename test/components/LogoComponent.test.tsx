/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { LogoComponent } from '../../components/LogoComponent';

describe('<LogoComponent/>', () => {
  it('correctly renders the component', () => {
    const { queryByText } = render(<LogoComponent />);

    expect(queryByText('Track')).toBeTruthy();
    expect(queryByText('Fit')).toBeTruthy();
  });
});
