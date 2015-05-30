'use strict';

var React = require('react-native');
var styles = require('../Styles/TicketStyles');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Component
} = React;

class Ticket extends Component {
  render() {
    var ticket = this.props.ticket;
    return (
      <View style={styles.ticket}>
        <View style={styles.leftContainer}>
          <Image
            source={{uri: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}}
            style={styles.avatar}
          />
          <View style={styles.ticketSizeContainer}>
            <Text style={styles.ticketSize}>{ticket.size ? ticket.size : '?'}</Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.ticketTitle}>
            {ticket.title}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.ticketNumber}>
            {'#' + ticket.local_id}
          </Text>
        </View>
      </View>
    );
  }

}

module.exports = Ticket;
