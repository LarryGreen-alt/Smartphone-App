import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
    },

    subtitleCTA: {
        textDecorationLine: 'underline'
    },

    subtitle: {
        fontSize: 16,
        color: '#5c5e62',

    },


    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonsContainer: {
        position: 'relative',
        bottom: -360,
        width: '100%',
    }

});

export default styles;