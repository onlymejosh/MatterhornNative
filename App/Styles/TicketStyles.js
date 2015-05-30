'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
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
