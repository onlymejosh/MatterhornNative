'use strict';

var React = require('react-native');
var ProjectsOverview = require('./App/Components/ProjectsOverview');
var Login = require('./App/Components/Login');

var {
  View,
  AppRegistry,
  Navigator,
  AsyncStorage,
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class MatterhornNative extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded:false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('@MatterhornNative:authentication')
    .then((value) => {
      if (value !== null) {
        this.setState({
          authentication: value,
        });
      }
      this.setState({
        loaded:true
      });
    })
    .catch((error) => console.log('AsyncStorage error: ' + error.message))
    .done();
  }

  renderScene(route, navigator) {
    var Component = route.component;

    return (
      <View style={styles.container}>
        <Component navigator={navigator} route={route} />
      </View>
    );
  }


  render() {
    var component = this.state.authentication ? ProjectsOverview : Login;
    if (this.state.loaded) {
      return (
        <Navigator
          style={styles.navigator}
          renderScene={this.renderScene}
          initialRoute={{
            component: component,
            passProps: {
              authentication: this.state.authentication
            }
          }}
        />
      );
    } else {
      // Wait until AsyncStore has loaded
      return (
        <View></View>
      );
    }

  }
}

React.AppRegistry.registerComponent('MatterhornNative', function() {
  return MatterhornNative
});
