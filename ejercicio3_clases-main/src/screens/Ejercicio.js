import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colores from '../data/colores';
import Boton from '../components/Boton';

const Ejercicio = ({ navigation }) => {
    const informacion = colores;

    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };

    // Agrupar los datos en conjuntos de tres
    const datosPorFilas = [];
    for (let i = 0; i < informacion.length; i += 3) {
        datosPorFilas.push(informacion.slice(i, i + 3));
    }

    return (
        <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Ejercicio 3:</Text>
                </View>
                <View style={styles.flatListContainer}>
                    <Text style={[styles.texto, styles.backTitulo]}>Colores Aquosos</Text>
                    <FlatList
                        data={datosPorFilas}
                        renderItem={({ item }) => (
                            <View style={styles.rowContainer}>
                                {item.map((info) => (
                                    <View key={info.id} style={[styles.cardContainer, { backgroundColor: info.backgroundColor }]}>
                                        <Image source={info.src} style={[styles.image, styles.cartaColor]} />
                                        <Text style={[styles.title, { backgroundColor: info.backgroundColor }]}>{info.title}</Text>
                                        <Text style={[styles.title, { backgroundColor: info.backgroundColor }]}>{info.texto}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <Boton
                    textoBoton='Regresar a Inicio'
                    accionBoton={irPantalla1}
                />
        </View>
    );
};

export default Ejercicio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    textContainer: {
        alignItems: 'center',
    },
    flatListContainer: {
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    cartaColor: {
        backgroundColor: "#40E0D0",
    },
    carta1: {
        backgroundColor: "#FFFFFF",
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
    },
});
