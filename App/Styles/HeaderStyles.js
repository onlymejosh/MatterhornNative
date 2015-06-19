'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    backgroundColor:'#4A4C59',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:14,
    paddingBottom: 2,
    marginTop: 0,
    height: 50,
  },
  menuButton: {
    width: 40,
    height: 30,
  },
  headerText: {
    flex:1,
    color:'#F7F7F7',
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    paddingLeft:5,
  },
});
