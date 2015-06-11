'use strict';

var React = require('react-native');

var Header = require('./Header');
var styles = require('../Styles/TicketView');

var {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  Component
} = React;


class TicketView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Header onSideMenu={() => console.log()} title="Dashboard" />
        <Text>TICKET BRO</Text>
      </View>
    );
  }
};

module.exports = TicketView;
