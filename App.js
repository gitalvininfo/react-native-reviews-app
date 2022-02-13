import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Home from './screens/home';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {

  const [loaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Home />
  );

}

