'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;


module.exports = StyleSheet.create({
  container: {
    flex:1,
  },
  fieldContainer: {
    flex:1,
    flexDirection: 'row',
    padding:5,
    paddingTop:8,
    paddingBottom:8,
    borderBottomWidth:1,
    borderColor:'#f2f2f2',
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
    fontWeight:'normal'
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
  }
});
