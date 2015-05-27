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
      feature: props.feature,
      tickets: props.tickets,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.tickets);
  }

  renderTicket(ticket) {
    return (
      <Ticket
        ticket={ticket} />
    )
  }
  render() {
    var feature = this.state.feature;
    return (
      <View style={styles.feature}>
        <View style={styles.featureHeader}>
          <Text style={styles.featureTitle}>{feature.title}</Text>
        </View>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(ticket) => this.renderTicket(ticket)}
            />
      </View>
    );
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