import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import Card from './companents/Card'
import data from "./data.json"

function App() {
    const renderProduct = (data) => <Card
        product={data.item}
    />;
    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>PATIKASTORE</Text>
            <TextInput
                style={styles.input}
                placeholder="Ara.."
            />
            <FlatList
                numColumns={2}
                keyExtractor={(item, index) => item.id.toString()}
                data={data}
                renderItem={renderProduct}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    appTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "purple"
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#e8e8e8",
        borderRadius: 10,
        backgroundColor: "#e8e8e8"
    },
  
})

export default App