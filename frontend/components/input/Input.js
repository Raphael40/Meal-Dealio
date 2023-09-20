import React from 'react';
import { View, Button} from 'react-native'

const Input = ({ handleMealDealConsumed }) => {
 
  const HandlePress=()=>{
     handleMealDealConsumed()
  }

  return (
    <View>
      <Button title='Add Meal Dealio' onPress={HandlePress}/>
    </View>
  )
}

export default Input