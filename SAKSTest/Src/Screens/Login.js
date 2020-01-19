import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux';
import {Logo} from '../Config/Images';

import color from '../Config/Color';

import {CommonButton} from '../Components/index';

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  onLoginPressed(){
    this.props.navigation.navigate('Welcomeback');
  }

  onGetStartPressed(){
    this.props.navigation.navigate('CreateAccount');
  }


  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.upperPart}>
          <Image source={Logo} style={styles.logoImage} />
        </View>
        <View style={styles.lowerPart}>
        <CommonButton ContainerStyle={styles.logInBtn} onPress={() => this.onLoginPressed()} containText={"LOG IN"} isTxtBlue={true}/>
        <CommonButton ContainerStyle={styles.startButton} onPress={() => this.onGetStartPressed()} containText={"GET STARTED"}/>

        </View>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'white',
  },
  upperPart:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  lowerPart:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logoImage:{
    height: Height/6,
    width: Width -(Width/6),
    resizeMode:'contain'
  },
  logInBtn:{
    height:Height/20,
    width:Width / 1.1,
    // marginLeft: Width/10,
    // marginRight: Width/10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.primaryWhite,
    borderColor:color.primaryBlue,
    borderWidth:1,
    borderRadius: 5,
  },
  startButton:{
    height:Height/20,
    width:Width / 1.1,
    // marginLeft: Width/10,
    // marginRight: Width/10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.primaryBlue,
    borderRadius: 5,
    marginTop:20
  },

});