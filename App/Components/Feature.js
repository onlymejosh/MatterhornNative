'use strict';

var React = require('react-native');
var Ticket = require('./Ticket');
var styles = require('../Styles/FeatureStyles');
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

module.exports = Feature;
