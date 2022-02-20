import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles as styles } from '../styles/global';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
      <Button title='go to review page' onPress={pressHandler} />

    </View>
  );
} 