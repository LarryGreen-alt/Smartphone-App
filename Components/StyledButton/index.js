// This code defines a React Native functional component called StyledButton, which renders a custom-styled button based on the type prop passed to it. 
// The button's appearance, such as background color and text color, is determined by the type prop. 
// The button content is specified using the content prop, and the onPress prop is used to handle the button press event. 
// The component is styled using the styles imported from the './styles' file.

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? 'black' : 'white';
    const textColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >

                <Text style={[styles.text, { color: textColor }]}> {content} </Text>
                
            </Pressable>
        </View>
    );
};

export default StyledButton;