import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Text,Modal} from 'react-native';
import {connect} from 'react-redux';
import {backButton} from '../Config/Images';

//import APIEndPoint
import {getAllUsersEndPoint} from '../Helpers/APIEndPoints';

//import color.js for colors
import color from '../Config/Color';

//import Action 
import {getAllUsers, showModal,closeModal} from '../Actions/AllUsers.actions';

//import API Request Type
import {RequestType} from '../Helpers/ConnectionAPI';

//import Components
import {UserCard,CommonButton} from '../Components/index';

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class AllUsers extends Component {
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


    componentWillMount(){
        let param = {
                URL: getAllUsersEndPoint,
                method: RequestType.GET
            };
        this.props.getAllUsers(param);
      }

      showModal(item){
        console.log("item=======",item);
        this.props.showModal(item)
      }

      closeModals() {
          this.props.closeModal();
      }

      renderItem = ({item, index}) => {
        return (
            <UserCard item={item} onPress={() => this.showModal(item)}/>
            )
      }


  render() {
      let {allUsers,selectedItem} = this.props;
      console.log("selectedItem===selectedItem",selectedItem);
      
    return (
      <View style={styles.Container}>
        <View style={styles.upperPart}>
            <Text style={styles.upperTxt}>All</Text>
            <View style={{}}>
                <Text style={styles.lowerTxt}>Users</Text>
            </View>
            
        </View>
        <View style={styles.lowerPart}>
        {allUsers && <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.props.allUsers}
                    horizontal={false}
                    keyExtractor= {(item) => {
                        return item.id
                    }}
                    renderItem={this.renderItem}/>}
            
        </View>

        <Modal
          transparent={true}
          animationType={'fade'}
          visible={this.props.isModalVisible}>

          <View>
            <View style={styles.ModalContainer}>
              <View style={styles.ModalInner} >
                <View style={styles.modalUpperView}>
                    <Text style={styles.modalTxt}>{selectedItem.FullName}</Text> 
                    <Text style={styles.modalTxt}>{selectedItem.Gender}</Text> 
                    <Text style={styles.modalTxt}>{selectedItem.DOB}</Text> 
                    <Text style={styles.modalTxt}>{selectedItem.Email}</Text> 
                </View>
                <View style={styles.modalBottomView}>
                    <CommonButton ContainerStyle={styles.BtnContainer} onPress={() => this.closeModals()} containText={"Close"}/>
                </View>
              </View>
            </View>
          </View>

        </Modal>
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
  { getAllUsers, showModal, closeModal }
)(AllUsers);

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'white',

  },
  upperPart:{
    flex:1,
    borderBottomWidth:3,
    borderColor: color.primaryBlue,
    width: Width/2,
    justifyContent:'center',
    marginLeft:Width/10
  },
  lowerPart:{
      flex:6,
      marginTop:Width/10
  },
  backArrow:{
      height:35,
      width:35,
      resizeMode:'contain'
  },
  upperTxt:{
    fontSize: 30,
    color: color.primaryBlue,
   },
   lowerTxt:{
    fontSize: 40,
    color: color.primaryBlue,
    fontWeight: 'bold',
   },
   listContainer:{
    alignItems:'center'
  },
  ModalContainer: {
    height: Height,
    width: Width,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  ModalInner: {
    height: Height/3,
    width: Width - (Width/5),
    marginLeft: Width/10,
    marginRight: Width/10,
    borderRadius: 20,
    backgroundColor:"white",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTxt:{
    fontSize: 20,
    color: color.primaryBlue,
    marginTop:10
  },
  BtnContainer:{
    height:Height/20,
    width:Width - (2*(Width/5)),
    marginLeft: Width/10,
    marginRight: Width/10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:color.primaryBlue,
    borderRadius: 5,

  },
  modalBottomView:{
    flex:1, 
    width: Width - (Width/5),
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center'
  },
  modalUpperView:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
  }

});