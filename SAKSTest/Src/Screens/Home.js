import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {Logo} from '../Config/Images';

//stateLess Component
import {RoundedCard} from '../Components/index';

//import color.js for colors
import color from '../Config/Color';

//get screen Dimensions
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


class Home extends Component {
  static navigationOptions = {
    header: null,
  };


  onCardPressed(index){
    let {navigation} = this.props;
    if(index == 0){
        navigation.navigate('AddUser');
    }else {
      navigation.navigate('AllUsers');
    }
  }


  renderItem = ({item, index}) => {
    return (
      <RoundedCard sourceImage={item.image} onPress={() => this.onCardPressed(index)}/>
        )
  }

  render() {
    let name = this.props.navigation.getParam('name');
    return (
      <View style={styles.Container}>
        <View style={styles.upperPart}>
            <View style={{flex:1}}>
                <Image source={Logo} style={styles.logoImage} />
            </View>
            <View style={styles.textPart}>
              <Text style={styles.welcomeTxt}>Welcome</Text>
              <Text style={styles.nameTxt}>{name}</Text>
            </View>
        </View>
        <View style={styles.lowerPart}>
            <FlatList style={styles.list}
                contentContainerStyle={styles.listContainer}
                data={this.props.data}
                horizontal={false}
                keyExtractor= {(item) => {
                    return item.id
                }}
                renderItem={this.renderItem}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data:state.Home.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  Container: {
    height: Height,
    width: Width,
    backgroundColor: 'white',
  },
  upperPart:{
    flex:1,
    paddingTop:Height/10,
    paddingLeft:Width/10,
    marginRight:Width/10,
  },
  lowerPart:{
    flex:3,
    marginTop:40
  },
  logoImage:{
    flex:1,
    width: Width/2,
    resizeMode:'contain'
  },
  listContainer:{
    alignItems:'center'
  },
 
 textPart:{
  flex:1,
  borderBottomWidth:3,
  borderColor: color.primaryBlue,

 },
 welcomeTxt:{
  fontSize: 25,
  color: color.primaryBlue,
 },
 nameTxt:{
  fontSize: 29,
  color: color.primaryBlue,
  fontWeight: 'bold',
 }


});