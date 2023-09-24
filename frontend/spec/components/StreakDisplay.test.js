import React from 'react';
import { render } from '@testing-library/react-native';
import StreakDisplay from '../../components/streak-display/StreakDisplay';
const exampleProps = {
  total: 10,
  currentStreak: 5,
  longestStreak: 7,
};
test('renders correctly', () => {
  const { getByText } = render(<StreakDisplay {...exampleProps} />);
  // Check if the component renders the correct text elements
  expect(getByText(`Total Meal Deals Consumed: ${exampleProps.total}`)).toBeTruthy();
  expect(getByText(`Current Streak: ${exampleProps.currentStreak}`)).toBeTruthy();
  expect(getByText(`Longest Streak: ${exampleProps.longestStreak}`)).toBeTruthy();
});