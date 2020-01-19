import React from "react";
import { StyleSheet, TouchableOpacity, Text, View,Dimensions } from "react-native";

//import color.js for colors
import color from '../Config/Color';

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const CommonButton = ({ContainerStyle,onPress, containText,isTxtBlue}) => {
    return(
        <View>
            <TouchableOpacity style={ContainerStyle} onPress={onPress}>
                <Text style={isTxtBlue?styles.BtnTxtBlue:styles.BtnTxt}>{containText}</Text>
            </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    BtnTxt:{
        fontSize: 20,
        color: color.primaryWhite,
      },
    BtnTxtBlue:{
        fontSize: 20,
        color: color.primaryBlue,
    }
  });

  export default CommonButton;


