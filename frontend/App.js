import { View } from 'react-native';

import StreakCounter from './components/streak-counter/StreakCounter';
import Input from './components/input/Input';

export default function App() {
  return (
    <View>
      <StreakCounter />
      <Input/>
    </View>
  );
}

