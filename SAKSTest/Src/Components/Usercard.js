import React from "react";
import { StyleSheet, TouchableOpacity, Text, View,Dimensions,Image } from "react-native";

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

//import colors
import color from '../Config/Color';

//import Images
import {Logo,next} from '../Config/Images';


//stateLess Component for HomeScreen
const UserCard = ({item, onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <View style={styles.firstView}></View>
                <View style={styles.secondView}>
                    <View style={styles.textPart}>
                        <Text style={styles.nameTxt}>{item.FullName}</Text>
                        <Text style={styles.genderTxt}>{item.Gender}</Text>
                    </View>
                    <View style={styles.imagePart}>
                        <Image source={next} style={styles.nextImage}/>
                    </View>
                </View>
                
            </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:"#e2e2e2",
        width:Width-(Width/10),
        height:100,
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:Width/20,
        flexDirection:'row'
      },
      firstView:{
        backgroundColor:color.primaryBlue,
        width:20,
        height:100,
      },
      secondView:{
          flex:1,
          flexDirection:'row'
      },
      textPart:{
        flex:1,
        marginLeft:15,
        justifyContent:'center',
      },
      imagePart:{
        width:40,
        height:100,
        alignItems:'center',
        justifyContent:'center',
      },
      nextImage:{
          height:30,
          width:30,
          resizeMode:'contain'
      },
      nameTxt:{
        fontSize: 20,
        color: color.primaryBlue,
      },
      genderTxt:{
        fontSize: 15,
        color: color.primaryBlue,
      }
      
  });

  export default UserCard;


