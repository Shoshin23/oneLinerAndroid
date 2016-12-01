
import React, { Component } from 'react';
import Style from './Style';
import {
    Text,
    View,
    AppRegistry
} from 'react-native';

class oneLiner extends Component {
	static title = '1Liner'

    render() {
        return (
            <View style= {Style.rootContainer}>
            	<Text style = {Style.labelText}> Hello, 1Liner </Text>
            </View>

        )
    }

}

AppRegistry.registerComponent('oneLiner', () => oneLiner);