import { View } from 'react-native';
import Feed from "./components/feed/Feed"
import styles from './app.style';

// expo start --tunnel : 'to start app'
// npx expo start --web : 'to start web app'

const App = () => {
  return (
    <View style={styles.view} >
      <Feed  />
    </View>
  );
}

export default App;