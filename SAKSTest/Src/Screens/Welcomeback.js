import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SocialIcon} from 'react-native-elements';

import {CommonButton} from '../Components/index';


//import color.js for colors
import color from '../Config/Color';

import {backButton} from '../Config/Images';

import {Login} from '../Actions/Welcomeback.actions';

import {LoginEndPoint} from '../Helpers/APIEndPoints';

//import API Request Type
import {RequestType} from '../Helpers/ConnectionAPI';



//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class WelcomeBack extends Component {


    static navigationOptions = ({navigation}) => ({  
        title: '',
        headerStyle: {
            backgroundColor: color.primaryWhite
          },
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backButton} style={styles.backArrow}/>
          </TouchableOpacity>
        ),
    });


  constructor(props) {
    super(props);
    this.state = {
        Email: null,
        Password:null
    };
  }

  onLoginPressed(){
      let {Email, Password} = this.state;
    let param = {
        URL: LoginEndPoint,
        method: RequestType.POST,
        Email: Email,
        Password: Password,

    };
    console.log(param);
    this.props.Login(param,this.props.navigation);
  }


 

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{marginTop: 10, marginLeft: 30}}>
            <Text style={styles.title}>Hello There !</Text>
            <Text style={styles.subtitle}>Welcome Back</Text>
            <View style={styles.devider}></View>
          </View>
          <View style={{alignSelf: 'center', marginTop: 80, marginLeft: 10}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.Email}
                //   keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={target => this.setState({Email:target})}
                  ref={input => {
                    this.last_name = input;
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.Password}
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  onChangeText={target => this.setState({Password:target})}
                  ref={input => {
                    this.last_name = input;
                  }}
                />
              </View>
            </View>
            <View style={styles.bottonCotainer}>
            <CommonButton ContainerStyle={styles.BtnContainer} onPress={() => this.onLoginPressed()} containText={"LOGIN"}/>
            </View>

            <View>
              <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
                OR
              </Text>
            </View>
            <SocialIcon
              title="Sign In With Facebook"
              button
              type="facebook"
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                width: Width / 1.1,
                borderRadius: 10,
                height:Height/20,
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

  

  const mapStateToProps = state => {
    return {

    };
  };

  export default connect(
    mapStateToProps,
    { Login }
  )(WelcomeBack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slfpLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    color: '#4A93D8',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 45,
    color: '#4A93D8',
    textAlign: 'left',
  },
  devider: {
    marginTop: 20,
    height: 2,
    backgroundColor: color.primaryWhite,
    width: Width / 1.4,
    alignSelf: 'center',
  },
  inputHeading: {
    fontSize: 17,
    color: '#4A93D8',
    textAlign: 'left',
  },
  inputContainer: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    width: Width / 1.1,
    height: 55,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 15,
    color: color.primaryWhite,
  },
  bottonCotainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: Width / 1.1,
    height:Height/20,
    borderRadius: 10,
    backgroundColor: '#4A93D8',
  },
  buttonContainer: {
    height: Height/ 13,
    width: Width / 1.1,
    marginTop: Height / 30,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    marginTop: -11,
    color: 'white',
    textAlign: 'center',
  },
  backArrow:{
    height:35,
    width:35,
    resizeMode:'contain'
},
BtnContainer:{
  height:Height/20,
  width:Width / 1.1,
  // marginLeft: Width/10,
  // marginRight: Width/10,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:color.primaryBlue,
  borderRadius: 5,

},
});