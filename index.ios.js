'use strict';

var React = require('react-native');
var ProjectsOverview = require('./ProjectsOverview');

var {
  View,
  AppRegistry,
  Navigator,
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class MatterhornNative extends React.Component {
  renderScene(route, navigator) {
    var Component = route.component;

    return (
      <View style={styles.container}>
        <Component navigator={navigator} route={route} />
      </View>
    );
  }
  

  render() {
    return (
      <Navigator
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: ProjectsOverview,
        }}
      />
    );
  }
}

React.AppRegistry.registerComponent('MatterhornNative', function() { 
  return MatterhornNative 
});