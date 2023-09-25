import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import {jest} from '@jest/globals';
import { collection, getDocs } from 'firebase/firestore'; // Import Firebase functions

import Feed from '../../components/feed/Feed';

jest.mock('firebase/firestore');

describe('Feed component', () => {

  const originalConsoleError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('should render StreakDisplay and Input component', async () => {
    
    const { getByTestId } = render(
      <Feed />
    );

    expect(getByTestId('feedId')).toBeTruthy();
    expect(getByTestId('streakDisplayId')).toBeTruthy();
    expect(getByTestId('inputId')).toBeTruthy();
  })

  it('fetches data from Firebase and updates component state', async () => {
    // Define the mocked data you want to use in the test
    const mockedData = [
      {
        id: '1',
        total: 5,
        longestStreak: 3,
        currentStreak: 2,
      },
    ];

    // Mock the Firebase function to return the predefined data
    getDocs.mockResolvedValue({
      docs: [
        {
          id: '1',
          data: () => mockedData[0],
        },
      ],
    });

    const { getByText, getByTestId } = render(<Feed />);

    await waitFor(() => {
      const totalTextElement = getByText(`Total Meal Deals Consumed: ${mockedData[0].total}`);
      const currentStreakTextElement = getByText(`Current Streak: ${mockedData[0].currentStreak}`);
      const longestStreakTextElement = getByText(`Longest Streak: ${mockedData[0].longestStreak}`);
  
      // Check if the text content matches the mocked values
      expect(totalTextElement).toBeTruthy();
      expect(currentStreakTextElement).toBeTruthy();
      expect(longestStreakTextElement).toBeTruthy();
    });
  });  
})