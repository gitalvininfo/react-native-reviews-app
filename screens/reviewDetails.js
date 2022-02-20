import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles as styles } from '../styles/global';

export default function ReviewDetails({ navigation }) {


    return (
        <View style={styles.container} >
            <Text > {navigation.getParam('title')}</Text>
            <Text > {navigation.getParam('body')}</Text>
            <Text > {navigation.getParam('rating')}</Text>
        </View>
    );
}