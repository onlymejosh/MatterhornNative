'use strict';

var React = require('react-native');

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



var styles = React.StyleSheet.create({
  ticket: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    padding:5,
    paddingBottom:0,
    marginBottom:1,
  },
  leftContainer: {
    marginLeft:-5,
    marginTop:-5,
    width:30,
    height:60,
  },
  avatar: {
    width:30,
    height:30,
  },
  ticketSizeContainer: {
    backgroundColor:'#6D9FAB',
    width:30,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketSize:{
    color:'#fff',
    justifyContent: 'center',
    fontWeight:'bold',
  },

  rightContainer: {
    width:35,
    alignItems: 'center',
  },

  mainContent: {
    flex:1,
    flexDirection: 'column',
    marginLeft:5,
    marginRight:2,
  },
  ticketTitle: {
    color: '#4a4c5a',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 2,
  },
  ticketNumber: {
    fontSize: 10,
    fontFamily:'Proxima Nova',
  }
});

module.exports = Ticket;