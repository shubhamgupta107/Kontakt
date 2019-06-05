import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from 'react-native';
import {DrawerItems} from 'react-navigation'

export default class MenuDrawer extends React.Component {

	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								<Image style={styles.img} source={require('../assets/guest-png-2.png')} />
							</View>
							<View style={styles.profileText}>
								<Text style={styles.name}>Guest</Text>
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						<DrawerItems {...this.props} />
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 140,
		backgroundColor: 'black',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
	}
})