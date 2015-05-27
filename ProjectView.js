'use strict';

var React = require('react-native');
var Feature = require('./Feature')
var TicketFilter = require('./TicketFilter')
var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;

var {
  StyleSheet,
  Image,
  ListView,
  View,
  Text,
  Component
} = React;


class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      project:props.route.passProps.project,
      features:props.route.passProps.features,
      tickets:props.route.passProps.tickets,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.features);
  }

  renderHeader() {
    return (
      <View style={[styles.headerContainer]}>
        <Text style={[styles.header]}>{this.state.project.title}</Text>
      </View>
    )
  }

  renderFeature(feature) {
    var tickets = this.state.tickets
      .filter(ticket => ticket.feature_id == feature.id)
      // .filter(feature => feature.project_id === project.id);
    console.log(tickets)
    return (
      <Feature
        feature={feature}
        tickets={tickets} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <TicketFilter/>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(feature) => this.renderFeature(feature)}
          />
      </View>
    );
  }
};

var styles = React.StyleSheet.create({
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
  // scheduledForToday: {
  //   // flex:1,
  //   backgroundColor:'#F7F7F7',
  //   borderRadius:5,
  //   margin:5,
  //   padding:10,
  // },
  listView: {
    marginTop:15,
    flex: 1,
  },
});

module.exports = ProjectView;