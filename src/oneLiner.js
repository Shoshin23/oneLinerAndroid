
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
            
            </View>

        )
    }

}

AppRegistry.registerComponent('oneLiner', () => oneLiner);