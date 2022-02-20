import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles as styles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container} >
            <Text > ReviewDetails Screen </Text>
            <Button title='go back' onPress={ pressHandler } />
        </View>
    );
}