// This code defines a React Native functional component called Header, which renders a header section for a mobile app. 
// The header contains two images, one displaying the Tesla logo and the other representing a menu icon, 
// both styled using the styles imported from the './styles' file.
import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/Images/tesla_logo.png')} />
            <Image style={styles.menu} source={require('../../assets/Images/menu.png')} />

            
        </View>
    );

};

export default Header;

