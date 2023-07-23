// This code defines a React Native functional component called CarList, which renders a list of cars using the FlatList component.
// The car data is fetched from the cars array, and each car item is rendered using the custom CarItem component.
// The FlatList is configured to scroll vertically with specific settings for alignment and scrolling behavior.
// The component is styled using the styles imported from the './styles' file.

import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

const CarList = () => {
    console.log(cars)
    return (
        <View styles={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false }
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarList;