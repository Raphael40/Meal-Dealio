import React from 'react';
import { render, fireEvent, } from '@testing-library/react-native';
import {jest} from '@jest/globals';
import Input from '../../components/input/Input';

describe('Input component', () => {
  it('should render the componenet and call handleMealDealConsumed when the button is pressed', async () => {
    
    // mock the handleMealDealConsumed function
    const mockHandleMealDealConsumed = jest.fn();
    
    // render the component
    const { getByText } = render(
      <Input handleMealDealConsumed={mockHandleMealDealConsumed} />
    );

    // find the button and press it
    const button = getByText('Add Meal Dealio');
    fireEvent.press(button);

    // check if the function has been called
    await Promise.resolve();
    expect(mockHandleMealDealConsumed).toHaveBeenCalled();
  })
})