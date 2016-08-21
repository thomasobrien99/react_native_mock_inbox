import React, {Component} from 'react'
import {
	ListView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity } from 'react-native'

import _ from 'lodash'

class MessagesListItem extends Component{
  render(){
    return(
   
    <TouchableOpacity style={styles.messageItem}>
   
    	<View style={styles.messageHeader}>
	    	<Text style={styles.fromText}>
	    		{_.truncate(this.props.message.from, {length:20})}
	    	</Text>
	 			<Text style={styles.dateText}>
	 				{this.props.message.date + ' >'}
	 			</Text>
		 	</View>
	
		  <View>
		  	<Text style={styles.subjectText}>
		  		{this.props.message.subject}
		  	</Text>
		  </View>
	
		  <View>
		  	<Text numberOfLines = {2} style={styles.contentText}>
		  		{this.props.message.content}
		  	</Text>
		  </View>
	
		</TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
	messageItem:{
		paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 10
  },
  fromText:{
  	fontWeight: 'bold',
		fontSize: 17
  },
	subjectText: {
		fontSize: 17
	},
	dateText: {
		fontSize: 15,
		color: '#646464'
	},
	contentText:{
		fontSize: 16,
		color: '#646464'
	},
	messageHeader:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})

export default MessagesListItem