import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { VictoryChart, VictoryLine} from 'victory-line';
import { Calendar} from 'react-native-calendars';
*/
import { GymCalendar } from './Components/GymCalendar';


class MyHome extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{ flex: 1, }}>
        <Text>{`Hello, user.\nHere you are at our app.\nhahaha`}</Text>
        <View>
          <Text>{``}</Text>
        </View>
        
      </View>
    )
  }
}

const RootStack = createBottomTabNavigator({
  Home: {
    screen: MyHome
  },
  Calendar: {
    screen: GymCalendar
  },
  
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
