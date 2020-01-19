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

import {backButton,dob} from '../Config/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ButtonGroup} from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {AddUserEndPoint} from '../Helpers/APIEndPoints';


//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


import {AddUser} from '../Actions/AddUser.actions';
import {RequestType} from '../Helpers/ConnectionAPI'


import {CommonButton} from '../Components/index';


import color from '../Config/Color';


class AddUserScreen extends Component {

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
      selectedGenderIndex: 0,
      dob: '',
      fullName:null,
      Email:null,
      gender:null,
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedGenderIndex) {
    this.setState({selectedGenderIndex});
  }
  //Date Picker handling methods
  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleDatePicked = date => {
    const mdate = date.toString().split(' ');
    this.setState({
      dob: mdate[1] + ' ' + mdate[2] + ', ' + mdate[3],
    });
    this.hideDatePicker();
  };

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  addUserPressed(){

    let {selectedGenderIndex, fullName, Email, dob} = this.state;

    let param = {
        URL: AddUserEndPoint,
        method: RequestType.POST
    };

    body = JSON.stringify({
        "FullName":fullName,
        "Email":Email,
        "Gender":selectedGenderIndex == 0 ? "Male" : "FeMale",
        "DOB":dob
    })

    console.log(param);
    console.log(body);

      this.props.AddUser(param, body);
  }

  render() {
    const buttons = ['Male', 'Female'];
    const {selectedGenderIndex} = this.state;
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{marginTop: 10, marginLeft: 30}}>
            <Text style={styles.title}>Add</Text>
            <Text style={styles.subtitle}>Users</Text>
            <View style={styles.devider}></View>
          </View>
          <View style={{alignSelf: 'center', marginTop: 30, marginLeft: 10}}>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>Full Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  value={this.state.fullName}
                  underlineColorAndroid="transparent"
                  onChangeText={target => this.setState({fullName:target})}
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
              <Text style={styles.inputHeading}>Gender</Text>
              <View style={styles.inputContainer}>
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedGenderIndex}
                  buttons={buttons}
                  containerStyle={styles.inputs}
                  selectedButtonStyle={{backgroundColor: '#4A93D8'}}
                  textStyle={{
                    fontSize: 15,
                  }}
                />
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.inputHeading}>DOB</Text>
              <TouchableOpacity onPress={() => this.showDatePicker()}>
                <View style={styles.inputContainer}>
                  <Text style={styles.inputDOB}>{this.state.dob}</Text>
                  <Image style={styles.inputIcon} source={dob} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottonCotainer}>

            <CommonButton ContainerStyle={styles.BtnContainer} onPress={() => this.addUserPressed()} containText={"ADD USER"}/>
        
            </View>
          </View>
        </KeyboardAwareScrollView>
        <DateTimePicker
          mode="date"
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />
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
    { AddUser }
  )(AddUserScreen);

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
    height: Height / 20,
    backgroundColor: '#4A93D8',
  },
  buttonContainer: {
    height: Height / 20,
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
  inputDOB: {
    height: 45,
    marginLeft: 18,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 15,
    marginTop: 20,
  },
  inputIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
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