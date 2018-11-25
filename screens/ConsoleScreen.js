import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

export default class ConsoleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
          <Text>{this.getResp()}</Text>
          </View>
        </ScrollView>

      </View>
    );
  }

  getResp = async () => {
    let userId = '';
    try {
      userId = await AsyncStorage.getItem('result') || 'none';
      console.log(userId)
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

    return JSON.stringify(userId);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center'
  },
});
