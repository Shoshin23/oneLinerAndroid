
import React, { Component } from 'react';
import Style from './Style';
import {
    Text,
    View,
    Navigator,
    AppRegistry
} from 'react-native';

class oneLiner extends Component {
	

    render() {
        return (
            <View style= {Style.rootContainer}>
            	 <View style={Style.topBar}>
            	 </View>
            </View>

        )
    }

}

AppRegistry.registerComponent('oneLiner', () => oneLiner);