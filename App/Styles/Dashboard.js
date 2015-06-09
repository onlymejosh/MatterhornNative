'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#DCDCDC',
  },
  agendaHeader: {
    backgroundColor:'#9F88BE',
    padding:10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  headerText: {
    color:'#F7F7F7',
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    fontWeight: '700',
  },
  projectContainer: {
    margin:10,
  }
});
