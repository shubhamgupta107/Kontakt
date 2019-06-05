import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'
import CustomHeader from '../CustomHeader'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon:(
      <Image
        source={require('../assets/home.jpg')}
        style={{width: 24, height: 24,}}
      />
    ),
  }
  render() {
        return (
            <View>
              <CustomHeader 
                title="Kontakt App" 
                openDrawer={() => this.props.navigation.openDrawer()}
               />
            </View>
        );
    }
}

