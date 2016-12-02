
import React, { Component } from 'react';
import Style from './Style';
import {
    Text,
    View,
    Image,
    AppRegistry
} from 'react-native';

class oneLiner extends Component {
	

    render() {
        return (
            <View style= {Style.rootContainer}>
            	 <View style={Style.topBar}>
            	 <Image style = {Style.topImage} source={require('../img/topIcon.png')}/>
            	 </View>
            	<Text style={Style.labelText}> The 1Liner App provides a carefully curated 1Liner for you twice a day.{"\n"}
            	You’re now signed up for push notification. Go ahead and close the app, we will interact on the lock screen later in the day.{"\n"}{"\n"}
				However, when you are having really focused times and want to do away with the notification for a while, you can mute us temporarily. </Text>

			<View style = {Style.muteButton}> 
				<Text style={{alignSelf:'center'}}> Mute </Text>
				</View>

            </View>

        )
    }

}

AppRegistry.registerComponent('oneLiner', () => oneLiner);