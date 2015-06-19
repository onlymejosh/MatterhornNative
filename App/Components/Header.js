'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');

var header = require('../Styles/HeaderStyles');

var {
  AppRegistry,
  Image,
  Text,
  View,
  TouchableOpacity,
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
        <TouchableOpacity onPress={() => this.handleSidebar()}>
          <Icon
            name={`fontawesome|${this.props.iconName}`}
            size={this.props.iconSize}
            color={'#F7F7F7'}
            style={header.menuButton}
          />
      </TouchableOpacity>
        <Text style={[header.headerText]}>{this.props.title}</Text>
      </View>
    )
  }
}

Header.propTypes = {
  iconName: React.PropTypes.string,
  iconSize: React.PropTypes.number,
  onPress: React.PropTypes.func,
}

Header.defaultProps = {
  iconName: 'bars',
  iconSize: 30,
  onPress: function noop() {},
};


module.exports = Header
