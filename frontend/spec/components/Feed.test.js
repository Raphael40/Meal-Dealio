import React from 'react';
import { render, fireEvent, } from '@testing-library/react-native';
import {jest} from '@jest/globals';

import Feed from '../../components/feed/Feed';

describe('Feed component', () => {
  it('should render StreakDisplay and Input component', async () => {
    
    const { getByTestId } = render(
      <Feed />
    );

    expect(getByTestId('feedId')).toBeTruthy();
    expect(getByTestId('streakDisplayId')).toBeTruthy();
    expect(getByTestId('inputId')).toBeTruthy();
  })

  
})