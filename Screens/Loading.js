import {
  SafeAreaView
} from 'react-native';
import App from '../App'
class Main extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <App/>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black'
  }
})
