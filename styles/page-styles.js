import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    header: {
        flex: 0.3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        height: 40,
        width: '100%',
        margin: 12,
        //borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        //height: 10,
        //margin: 10,
        //borderWidth: 1,
        //padding: '10%',
        //width:'100%',


        margin: 12,
        width: '100%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttons: {
        marginBottom: 20,

        padding: 10,
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});

export default styles;