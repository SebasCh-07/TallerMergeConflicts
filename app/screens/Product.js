import { View, Text, StyleSheet, Button } from 'react-native'

export const Product = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi tienda, soy: Paul</Text>
        <Text style={styles.producto1}>CocaCola</Text>
        <Text style={styles.producto2}>Sprit</Text>
        <Text style={styles.producto3}>Pepsi</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aeb6bf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    producto1: {
        color: 'yellow'
    },
    producto2: {
        color: 'blue'
    },
    producto3: {
        color: 'red'
    }
});