// This script is a React Native mobile application that renders a list of cars with a header using custom components.
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import CarsList from './Components/CarsList';
import Header from './Components/Header';

export default function App() {
  return (
      <View style={styles.container}>
          <Header />

          <CarsList />
        

          <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

});
