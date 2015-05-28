'use strict';

var React = require('react-native');
var Ticket = require('./Ticket');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Component
} = React;

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true,
      })
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(this.props.tickets);
  }

  renderTicket(ticket) {
    return (
      <Ticket
        ticket={ticket} />
    )
  }
  render() {
    var feature = this.props.feature;
    
    if (this.props.tickets.length > 0) {
      return (
        <View style={styles.feature}>
          <View style={styles.featureHeader}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
          </View>
          <View style={{flex:1}}>
            {this.props.tickets.map((ticket) => this.renderTicket(ticket)) }
          </View>
        </View>
      );
    } else {
      return (
        <View />
      );
    }
    
  }
}

var styles = React.StyleSheet.create({
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

module.exports = Feature;