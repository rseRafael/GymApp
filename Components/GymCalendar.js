import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar} from 'react-native-calendars';


export class GymCalendar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Calendar
                    markedDates={{
                        '2018-08-09':{selected: true, selectedColor: "blue"}, 
                        '2018-08-19': {selected: true, selectedColor: "green"}
                    }}
                />
            </View>
        )
    }
}