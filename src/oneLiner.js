
// import React, {Component} from 'react';
// import { 
// 	Text,
// 	AppRegistry
// } from 'react-native';

// class oneLiner extends Component {

// 	render() {
// 		return (
// 			<Text> 1Liner </Text>
// 			)
// 	}
// }

// AppRegistry.registerComponent('oneLiner',() => oneLiner)

import React, { Component } from 'react';
import {
    Text,
    AppRegistry
} from 'react-native';

class oneLiner extends Component {

    render() {
        return (
            <Text>Hello, React!</Text>
        )
    }

}

AppRegistry.registerComponent('oneLiner', () => oneLiner);