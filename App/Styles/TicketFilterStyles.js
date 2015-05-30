'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  filterBar: {
    backgroundColor:'#fff',
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:10,
    // justifyContent: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  filterButton: {
    flex:1,

    justifyContent: 'center',
    // fontWeight:'bold',
  },
  filterText: {
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    fontWeight: 'normal',
    color:'#666',
    justifyContent: 'center',
    textAlign: 'center',
  },
  active: {
    fontWeight:'bold',
    backgroundColor:'red',
  },

});
