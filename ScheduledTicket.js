'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class ScheduledTicket extends Component {
  render() {
    var ticket = this.props.ticket;
    return (
      <View style={styles.ticket}>
        <Text style={[styles.title, styles.strong]}>
          {'#' + ticket.local_id + ' ' + ticket.title}
        </Text>
      </View>
    );
  }
}

var styles = React.StyleSheet.create({
  feature: {
    flex: 1,
    margin:5,
  },
  title: {
    fontWeight: 'normal',
    color: '#4a4c5a',
    marginLeft:10,
  },
  strong: {
    fontWeight: '700',
    color:'#6A97AC'
  }
});

module.exports = ScheduledTicket;