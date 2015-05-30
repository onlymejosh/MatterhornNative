'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  projectContainer: {
    flex: 1,
    backgroundColor: 'yellow',
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
    fontFamily: 'Proxima Nova',
    fontWeight:'bold',
    color:'#666',
    fontSize: 20,
    padding:15,
  },
  listView: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});
