import React, { Component } from 'react';
import { View, Text,Button,SafeAreaView,ScrollView,Image } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'


import HomeScreen from './screens/HomeScreen'
import SerieScreen from './screens/SerieScreen'
import SerieDtails from './screens/serieDetails'

import player from './screens/player'





const RootStack = createStackNavigator(
  {
    Serie:SerieScreen,
    SerieDetails: SerieDtails,
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
},
  {
    initialRouteName: 'Serie',
  },
  
);

const SeriesStack = createAppContainer(RootStack)

const CustomDrawerContentComponent = props => (
    <SafeAreaView
      style={{flex:1,backgroundColor:'#121212'}}
    >
      <View style={{backgroundColor:'#1D1B1B',height:150,flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./assets/logoicon.png')}
        />
      </View>
      <Text style={{color:'gray',marginLeft:10,marginTop:20}}>Menu</Text>
      <DrawerItems {...props}  />
    </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Series: {
    screen:SeriesStack
  },
  Films: {
    screen: SerieScreen,
  },
  Emissions: {
    screen: SerieScreen,
  },
  Documentaires: {
    screen: SerieScreen,
  },
  playerS: {
    screen: player,
  },
},{
  contentComponent:CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: 'red',
    inactiveTintColor:'white',
  }
});

export default MyApp = createAppContainer(MyDrawerNavigator);