import { View } from 'react-native';
import Feed from "./components/feed/Feed"

// expo start --tunnel : 'to start app'
// npx expo start --web : 'to start web app'

const App = () => {
  return (
    <View>
      <Feed />
    </View>
  );
}

export default App;