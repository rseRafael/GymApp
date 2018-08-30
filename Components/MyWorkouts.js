import React, { Component} from 'react';
import {Text, View, StyleSheet, Button, TouchableHighlight, TextInput, Image} from 'react-native';

const myStyles = StyleSheet.create({
    nameInput:{
        width: "100%",
        height: "10%", 
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: "5%",
    },
    descriptionInput: { 
        width: "100%",
        height: "50%", 
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: "3%",
    }
});

export class MyWorkOuts extends Component{ 
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View>
                    <Button
                        title="New Workout"
                        onPress={()=>{
                            this.props.navigation.navigate('NewWorkout')
                        }}
                    />
                </View>
                <View>
                    <Text>{`Here should be a list of workouts`}</Text>
                </View>
            </View>
        )
    }
}

export class NewWorkout extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            description: '',
        }
    }
    render(){
        return(
            <View>
                <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                    <TouchableHighligh onPress={()=>{
                        this.props.navigation.back();
                    }}>
                        <Text>{`Cancel`}</Text>
                    </TouchableHighligh>
                    <Text>{`New Workout`}</Text>
                    <TouchableHighlight onPress={
                        //Add the new workout to the list
                        //Go to add exercises
                        ()=>{
                            this.props.navigation.navigate('WorkoutSetting', {name: this.state.name });
                        }   
                    }>
                        <Text>
                            {`Save`}
                        </Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TextInput style={{width: "100%", height: "10%"}} placeholder={`enter workout name`} onChange={(text)=>{this.setState({name: text})}}/>
                    <TextInput style={{width: "100%", height: "35%"}} placeholder={`Add description here`} onChange={(text)=>{this.setState({description: text})}}/>
                </View>
            </View>
        )
    }
}

export class WorkoutSetting extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var name = this.props.navigation.getParam('name', 'No-Name-Received');
        return(
            <View>
                <View>
                    <TouchableHighlight onPress={()=>{
                        this.props.navigation.back();
                    }}>
                        <Text>{`< Back`}</Text>
                    </TouchableHighlight>
                    <Text>{name}</Text>
                    <TouchableHighlight onPress={()=>{
                        this.props.navigation.navigate('ExercisesList');
                    }}>
                        <Text>{`Add Exercises`}</Text>
                    </TouchableHighlight>
                </View>
                <View>

                </View>
            </View>
        )
    }
}

class ExerciseCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
                <View style={{height: "35%", width: "100%"}}>  
                    <Text>{this.props.name}</Text>
                    <Image
                        source={{uri: this.props.image}}
                        style={{height: "50%", width: "50%"}}
                    />
                    <Text>{this.props.description}</Text>
                    <TouchableHighlight onPress={()=>{
                        Alert.alert("Hello, world");
                    }}>
                        <Text>{`<> Add`}</Text>
                    </TouchableHighlight>
                </View>
            
        )
    }
}
export class ExercisesList extends Component{
    constructor(props){
        super(props);
        this.state={
            biceps:{
                name: "Biceps",
                description: "Exercises to make your arms as big as fuck.",
                image: "https://www.dicademusculacao.com.br/wp-content/uploads/2017/07/biceps.jpg"
            },
            triceps:{
                name: "Triceps",
                description: "Exercises to make your arms as big as fuck.",
                image: "https://aretheyonsteroids.com/wp-content/uploads/2017/03/steroids-for-big-arms-1.png"
            },
            back:{
                name: "Back",
                description: "Make your back locking like a naja snake.",
                image: "https://www.t-nation.com/system/publishing/articles/10003306/original/Bad-Back-Big-Muscles.jpg?1453247395"
            },
            chest:{
                name: "Chest", 
                description: "Make your chest looking like a box. A black-box.",
                image: "http://assets.menshealth.co.uk/main/thumbs/34145/massive-chest.jpg"
            },
            shoulder:{
                name: "Shoulder",
                description: "Make your shoulder looking like two basketballs.",
                image: "https://www.t-nation.com/system/publishing/articles/10004575/original/The-Raise-Hold-For-Big-Shoulders.png?1489523635",
            },
            leg:{
                name: "Leg",
                description : "Make your legs looking as big as fuck",
                image: "https://www.t-nation.com/system/publishing/articles/10000388/original/4-Weeks-to-Bigger-Legs.jpg?1455838420",
            },
            abs:{
                name: "Abdominals",
                description: "Make your abs ripped.",
                image: "https://i.ytimg.com/vi/jKzV3Jk0wtc/maxresdefault.jpg",
            }
        }
    }
    render(){
        //const {biceps, triceps, back, chest, shoulder, legs, abs } = this.state;
        return(
            <View>
                {
                    ()=>{
                        for(var prop of this.state){
                            return (
                                <ExerciseCard name={this.state[prop].name} description={this.state[prop].description} image={this.state[prop].image}/>
                            );
                        }
                    }
                }
                
            </View>
        )
    }
}