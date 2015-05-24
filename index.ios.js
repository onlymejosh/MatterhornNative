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
  },
  headerContainer: {
    marginTop: 45,
    paddingBottom: 5,
  },

  header: {
    fontFamily: 'Avenir',
    fontSize: 23,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
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