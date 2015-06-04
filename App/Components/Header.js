'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');

var header = require('../Styles/HeaderStyles');

var {
  AppRegistry,
  Image,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSidebar() {
    this.props.onSideMenu()
  }

  render() {
    return (
      <View style={header.container}>
        <TouchableHighlight onPress={() => this.handleSidebar()}>
          <Icon
            name='fontawesome|bars'
            size={30}
            color={'#F7F7F7'}
            style={header.menuButton}
          />
        </TouchableHighlight>
        <Text style={[header.headerText]}>{this.props.title}</Text>
      </View>
    )
  }
}

module.exports = Header
