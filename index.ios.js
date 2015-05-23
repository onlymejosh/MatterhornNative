'use strict';

var React = require('react-native');
var ProjectsOverview = require('./ProjectsOverview');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class MatterhornNative extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        barTintColor='#4a4c5a'
        tintColor="#fff"
        titleTextColor="#fff"
        initialRoute={{
          title: 'Matterhorn',
          component: ProjectsOverview,
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('MatterhornNative', function() { 
  return MatterhornNative 
});