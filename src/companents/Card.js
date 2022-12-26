import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "./cardStyle"

function Card({product}) {
    console.log(product)
    return (
        <View style={(product.id === 10) ? styles.lastProductContainer : styles.cardContainer}>
            <Image 
                resizeMethod="scale"
                style={(product.id === 10) ? styles.lastImg : styles.image}
                source={{ uri: product.imgURL }}
            />
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.inStock}>{(product.inStock == false) ? "STOKTA YOK" : ""}</Text>
        </View>
    )
}

export default Card