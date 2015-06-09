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
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    }
  }
  handleTicketState() {
    this.setState({completed: !this.state.completed})
  }
  render() {
    var ticket = this.props.ticket;
    var todoStyle = {
      backgroundColor:'#DCDCDC'
    }
    var completeStyle = {
      backgroundColor:'#B2D171'
    }
    var ticketStyle = this.state.ticketState ? completeStyle : todoStyle
    return (
      <View style={[ticketStyles.ticket,styles.ticket]}>
        <View style={[ticketStyles.leftContainer,styles.leftContainer]}>
          <View style={{alignItems:'center',}}>
            <TouchableHighlight
              onPress={this.handleTicketState.bind(this)}
              underlayColor={'#B2D171'}
              style={[ticketStyle,{borderRadius: 4}]}>
              <Icon
                name='fontawesome|check'
                size={20}
                color={'#F7F7F7'}
                style={{width: 30,height: 30,borderRadius: 4}}
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
