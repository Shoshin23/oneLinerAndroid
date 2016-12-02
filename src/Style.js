import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

	rootContainer: {
		flex:1,
		backgroundColor: '#F4EC0F'
	},

	topImage: {
		alignSelf:'center',
		height:60,
		width:60
	},

	muteButton: {
		height: 70,
		width: 100,
		backgroundColor: 'transparent',
		borderRadius:25,
		borderStyle:'solid',
		borderWidth: 1,
		alignSelf: 'center',
		marginTop: 40,
		justifyContent:'center'
	},

	labelText: {
		fontSize: 15,
		marginTop: 30,
		marginLeft: 5,
		fontFamily: 'Lato',
		fontWeight: 'normal',
		textAlign : 'center'
	},

	topBar: {
		height:60,
		backgroundColor: '#F4EC0F',
		elevation: 3
	}


});

export default Style