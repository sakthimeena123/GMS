import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';


import StackNavigator from './src/Navigation/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
     
        <StackNavigator />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
