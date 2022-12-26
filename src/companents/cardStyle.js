
import { Dimensions, StyleSheet } from "react-native"

export default StyleSheet.create({
    cardContainer: {
        backgroundColor:"#e8e8e8",
        width:"49%",
        borderRadius: 10,
        marginTop:5,
        marginRight:5,
        padding: 10,
        
    },
   
    image: {
        height: Dimensions.get('window').height * 0.27,
        width: Dimensions.get('window').width * 0.4,
        borderRadius: 10,
        alignSelf: 'center',
        
    },
    text: {
        color:"black",
        fontWeight:"bold",
        fontSize:18,
        marginTop:5,
        marginBottom:5
    },
    inStock:{
        color:"red",
        fontWeight:"bold"
    },
    lastProductContainer: {
        width:"100%",
        backgroundColor:"#e8e8e8",
        borderRadius:10,
        marginTop:5,
        padding:10
        
    },
    lastImg:{
        height: Dimensions.get('window').height * 0.27,
        width: "100%",
        borderRadius: 10,
        alignSelf: "center",
    }
})

