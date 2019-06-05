import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'
import CustomHeader from '../CustomHeader'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon:(
      <Image
        source={require('../assets/profile.png')}
        style={{width: 24, height: 24,}}
      />
    ),
  }
  render() {
        return (
            <View>
              <CustomHeader 
                title="Profile" 
                openDrawer={() => this.props.navigation.openDrawer()}
               />
            </View>
        );
    }
}

