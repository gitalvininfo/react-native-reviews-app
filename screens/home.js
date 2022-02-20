import React, { useState } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles as styles } from '../styles/global';

export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta catch them all again', rating: 4, body: 'lorem ipsum', key: '1' },
    { title: 'Not so final fantasy', rating: 3, body: 'lorem ipsum', key: '1' },
  ])

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={styles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
} 