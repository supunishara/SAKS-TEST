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
import {backButton} from '../Config/Images';
import {connect} from 'react-redux';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import color from '../Config/Color';

import {CreateAccounts} from '../Actions/CreateAccount.actions';

import {CommonButton} from '../Components/index';

import {RequestType} from '../Helpers/ConnectionAPI';


//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


import {CreateUserEndPoint} from '../Helpers/APIEndPoints';


 class CreateAccount extends Component {


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
        FullName:null,
        Email:null,
        Password:null
    };
  }

  createAccountPressed(){
      let {FullName, Email, Password} = this.state;

    let param = {
        URL: CreateUserEndPoint,
        method: RequestType.POST
    };

    body = JSON.stringify({
        "FullName":FullName,
        "Email":Email,
        "Password":Password
    })

      this.props.CreateAccounts(param, body, this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{marginTop: 10, marginLeft: 30}}>
            <Text style={styles.title}>Hello There !</Text>
            <Text style={styles.subtitle}>Welcome To You</Text>
            <View style={styles.devider}></View>
          </View>
          <View style={{alignSelf: 'center', marginTop: 30, marginLeft: 10}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>Full Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.FullName}
                  underlineColorAndroid="transparent"
                  onChangeText={target => this.setState({FullName:target})}
                  ref={input => {
                    this.last_name = input;
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.Email}
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
            <CommonButton ContainerStyle={styles.BtnContainer} onPress={() => this.createAccountPressed()} containText={"CREATE ACCOUNT"}/>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
      allUsers:state.AllUsers.allUsers,
      isModalVisible:state.AllUsers.isModalVisible,
      selectedItem: state.AllUsers.selectedItem
    };
  };
  
  
  export default connect(
    mapStateToProps,
    { CreateAccounts}
  )(CreateAccount);

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
    borderRadius: 10,
    // height: Metrics.DEVICE_HEIGHT / 12.5,
    height:Height/20,
    backgroundColor: '#4A93D8',
  },
  buttonText: {
    fontSize: 18,
    marginTop: -11,
    color: 'white',
    textAlign: 'center',
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
  backArrow:{
    height:35,
    width:35,
    resizeMode:'contain'
},
});