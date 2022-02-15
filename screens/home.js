import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles as styles } from '../styles/global';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View> 
  );
} 