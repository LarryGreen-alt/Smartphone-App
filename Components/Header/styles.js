import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 20,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },

    logo: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
    },

    menu: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    },


});


export default styles;