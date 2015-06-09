'use strict';

var React = require('react-native');
var ticketStyles = require('../Styles/TicketStyles');
var styles = require('../Styles/TodoTicket');
var Icon = require('FAKIconImage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Component
} = React;

class TodoTicket extends Component {
  render() {
    var ticket = this.props.ticket;
    return (
      <View style={[ticketStyles.ticket,styles.ticket]}>
        <View style={[ticketStyles.leftContainer,styles.leftContainer]}>
          <View style={{alignItems:'center',}}>
            <TouchableHighlight
              onPress={() => this.handleTicketState()}
              underlayColor={'#B2D171'}
              style={{backgroundColor:'#DCDCDC',borderRadius: 4,}}>
              <Icon
                name='fontawesome|check'
                size={20}
                color={'#F7F7F7'}
                style={{width: 30,height: 30,borderRadius: 4,}}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={ticketStyles.mainContent}>
          <Text style={ticketStyles.ticketTitle}>
            {'#' + ticket.local_id} {ticket.title}
          </Text>
        </View>
      </View>
    );
  }

}

module.exports = TodoTicket;
