import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

import MessagesList from './app/components/MessagesList'
import {mock_messages} from './messages'

class project extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{ name: 'inbox', index: 0}}
          renderScene={(route, nav)=>this._renderScene(route, nav)}
          sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight, flex:1}}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) =>
                  { return (
                    <TouchableOpacity>
                      <Text style={styles.navigationText}>{'<'} Mailboxes</Text>
                    </TouchableOpacity>
                  )},
                RightButton: (route, navigator, index, navState) =>
                  { return (
                    <TouchableOpacity>
                      <Text style={styles.navigationText}>Edit  </Text>
                    </TouchableOpacity>
                  )},
                Title: (route, navigator, index, navState) =>
                  { return (
                      <Text style={styles.navigationTitleText}>All Inboxes</Text>
                  )}
              }}
              style={styles.navigationBar}
            />
          }
        />
    );
  }
  _renderScene(route, navigator) {
    switch(route.name){
      case 'inbox': return <MessagesList messages={mock_messages}/>
      default: return <MessagesList messages={mock_messages}/>
    }
  }

}


const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#DCDCDC'
  },
  navigationText: {
    color: "#007AFF",
    fontSize: 17,
    paddingTop: 12
  },
  navigationTitleText:{
    fontWeight: 'bold',
    fontSize:17,
    paddingTop: 12
  }
});

AppRegistry.registerComponent('project', () => project);
