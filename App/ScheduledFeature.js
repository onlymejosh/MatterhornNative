'use strict';

var React = require('react-native');
var ScheduledTicket = require('./ScheduledTicket');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Component
} = React;

class ScheduledFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: props.feature.feature,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.feature.tickets);
  }

  renderTicket(ticket) {
    return (
      <ScheduledTicket
        ticket={ticket} />
    )
  }
  render() {
    var feature = this.state.feature;
    return (
      <View style={styles.feature}>
        <Text style={[styles.title]}>
          {'Feature '}
          <Text style={styles.strong}>{'#' + feature.local_id + ' '}</Text>
          {feature.title}
        </Text>
        <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={(ticket) => this.renderTicket(ticket)}
            />
      </View>
    );
  }
}

var styles = React.StyleSheet.create({
  feature: {
    flex: 1,
    margin:5,
  },
  title: {
    fontWeight: 'normal',
    color: '#4a4c5a',
    marginBottom:5,
  },
  strong: {
    fontWeight: '700',
    color:'#6A97AC'
  }
});

module.exports = ScheduledFeature;