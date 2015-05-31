var React = require('react-native')

var {
  SwitchIOS,
  View,
  Text,
  StyleSheet,
} = React

// var styles = require('./Styles/ProjectSidePanelStyles')

module.exports = React.createClass({
  render(){
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
      </View>
    )
  }
})


var styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
    backgroundColor:'#326945',
  },
  controlPanelText: {
    color:'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
  },
  controlPanelWelcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 25,
    color:'white',
    fontWeight:'bold',
  }
});
