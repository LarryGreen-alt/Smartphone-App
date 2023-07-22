import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/Images/TeslaCar.jpg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <View>
                <StyledButton type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");

                    }}
                />

                <StyledButton type="secondary"
                    content={"Exsisting Inventory"}
                    onPress={() => {
                        console.warn("Exsisting Inventory was pressed");

                    }}
                />

            </View>

        </View>
    );
};

export default CarItem;