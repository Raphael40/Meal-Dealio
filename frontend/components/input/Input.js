import React, { useState } from 'react';
import { View, Button} from 'react-native'

// This component is a button that calls the handleMealDealConsumed function in the Feed component
const Input = ({ handleMealDealConsumed }) => {
 
  const HandlePress=()=>{
     handleMealDealConsumed()
  }

  return (
    <View testID='inputId'>
      <Button title='Add Meal Dealio' onPress={HandlePress}/>
    </View>
  )
}

export default Input