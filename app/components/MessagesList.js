import React, {Component} from 'react'
import {
  View,
  TextInput,
  Text,
  ListView,
  StyleSheet,
  Navigator} from 'react-native'

import MessagesListItem from './MessagesListItem'

import helpers from '../helpers'

class MessagesList extends Component{
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>{return r1 !== r2}})
    this.state = {
      messagesDataSource : 
        ds.cloneWithRows(
          helpers.getMostRecent(
            helpers.groupMessages(
              this.props.messages
              )
            )
          )
    }
  }
  render(){
    return(
      <View style={styles.messagesList}>
       
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search"/>
        </View>
       
        <ListView
          dataSource = {this.state.messagesDataSource}
          renderRow = {message=><MessagesListItem message={message}/>}
          renderSeparator={this._renderSeparator}/>
       
        <View style={styles.footerContainer}>
          <Text>Updated Just Now</Text>
        </View>
     
      </View>
    )
  }
  _renderSeparator(sectionID, rowID){
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{height:2, marginTop: 10, marginLeft:15, backgroundColor:'lightgray'}}
      />
      )
  }
}


const styles = StyleSheet.create({
  messagesList:{
    flex: 1
  },
  footerContainer:{
    height: Navigator.NavigationBar.Styles.General.TotalNavHeight, 
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer:{
    backgroundColor: '#B4B4B4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 8
  },
  searchInput:{
    backgroundColor: 'white',
    height:40,
    flex: 1,
    textAlign: 'center',
    borderRadius: 5
  }
})

export default MessagesList