import { View, Text, Button} from 'react-native'
import React, { useState} from 'react';
import Total from "../../classes/Total";
import StreakCounter from '../streak-counter/StreakCounter';
import { setTotalExternal } from '../streak-counter/StreakCounter';

const Input = () => {
 

  const HandlePress=()=>{
     setTotalExternal() 
  }
  return (
    <View>
      <Button title='Add Meal Dealio' onPress={HandlePress}/>
    </View>
  )
}

export default Input