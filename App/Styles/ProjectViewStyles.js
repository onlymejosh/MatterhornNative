'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DCDCDC',
  },
  headerContainer: {
    backgroundColor:'#4A4C59',
    marginTop: 0,
    paddingBottom: 0,
  },
  header: {
    color:'#fff',
    fontFamily: 'Proxima Nova',
    fontSize: 23,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  title: {
    fontWeight: '700',
    color: '#4a4c5a',
  },
  listView: {
    marginTop:15,
    flex: 1,
  },
});
