import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    avatarContainer: {
        width: 150,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    logo: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default styles;
