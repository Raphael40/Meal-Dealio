import React from 'react';
import { render, fireEvent, } from '@testing-library/react-native';
import {jest} from '@jest/globals';
import Input from '../../components/input/Input';

describe('Input component', () => {
  it('should render the componenet and call handleMealDealConsumed when the button is pressed', async () => {
    const mockHandleMealDealConsumed = jest.fn();
    const { getByText } = render(
      <Input handleMealDealConsumed={mockHandleMealDealConsumed} />
    );
    const button = getByText('Add Meal Dealio');
    fireEvent.press(button);
    await Promise.resolve();
    expect(mockHandleMealDealConsumed).toHaveBeenCalled();
  })
})