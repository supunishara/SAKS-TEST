import React from "react";
import { StyleSheet, TouchableOpacity, Image, View,Dimensions } from "react-native";

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

//stateLess Component for HomeScreen
const RoundedCard = ({sourceImage, onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.cardImage} source={sourceImage}/>
            </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    card:{
        shadowColor: '#474747',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor:"#e2e2e2",
        //flexBasis: '42%',
        width:Width/2.5,
        height:Width/2.5,
        borderRadius:Width/5,
        alignItems:'center',
        justifyContent:'center'
      },
      cardImage:{
        height: Width/8,
        width: Width/6,
        alignSelf:'center'
      },
  });

  export default RoundedCard;


