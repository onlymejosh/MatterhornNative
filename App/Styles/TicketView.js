'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var INPUT_COLOR = '#000000';
var BORDER_COLOR = '#cccccc';
var FONT_SIZE = 12;
var FONT_WEIGHT = '500';


module.exports = StyleSheet.create({
  container: {
    flex:1,
  },
  label: {
    color: '#666',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  featureDropdown: {
    position:'relative',
    borderRadius:3,
    padding:5,
    borderWidth:1,
    borderColor:'#dcdcdc',
    flex:1,
  },

  sizingContainer: {
    flexDirection:'row'
  },
  sizeContainer: {
    height:30,
    backgroundColor:'#DCDCDC',
    marginRight:2,
    borderRadius:3,
    paddingTop:8,
    width:30,
    alignItems:'center',
    alignSelf:'center'
  },
  ticketSize: {
    color:'#fff',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ticketTitle: {
    color: '#4a4c5a',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  ticketDescription: {
    color: '#4a4c5a',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 2,
  },
  keyboardContainer: {
    flexDirection:'row',
    bottom:0,
    left:0,
    right:0,
    padding:3,
    position:'absolute',
    backgroundColor:'#eee'
  },
  textbox: {
    flex:1,
    height: 26,
    borderWidth: 0.5,
    borderRadius:3,
    borderColor: '#c3c3c3',
    backgroundColor:'#fff',
    fontSize: 13,
    padding: 4,
  },
  sendButton: {
    // alignSelf:'center',
    padding:5,
    fontFamily:'Proxima Nova',
    fontSize: 13,
    fontWeight: 'bold',
    color:'#A188BB'
  }
});
