'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  feature: {
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 0.1,
      width: 0
    }
  },
  featureHeader: {
    backgroundColor:'#4A4C59',
    borderRadius:6,
  },
  featureTitle: {
    color:'#fff',
    fontFamily:'Proxima Nova Soft',
    fontSize: 14,
    fontWeight: 'bold',
    padding:10,
  },
});
