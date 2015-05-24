'use strict';

var React = require('react-native');
var ScheduledFeature = require('./ScheduledFeature')
var {
  StyleSheet,
  Image,
  ListView,
  View,
  Text,
  Component
} = React;

var SCHEDULED = [
  {
    feature:{
      id: 1,
      title: 'Matterhorn CLI',
      local_id: 542,
      tickets: [
        {
          id: 12,
          title: 'Email Remco',
          local_id: 432
        }
      ]
    }
  },{
    feature:{
      id: 1,
      title: 'Project',
      local_id: 467,
      tickets: [
        {
          id: 12,
          title: 'When 403 from find we should direct to accounts page',
          local_id: 754
        },{
          id: 12,
          title: 'Ability to create a ticket without a feature',
          local_id: 756
        },
      ]
    }
  },{
    feature:{
      id: 1,
      title: 'Feedback',
      local_id: 1357,
      tickets: [
        {
          id: 12,
          title: 'Make sure to add min height to description field',
          local_id: 431
        }
      ]
    }
  },
];

class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      project:props.route.passProps.project,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(SCHEDULED);
  }

  renderHeader() {
    var projectStyle = {
      backgroundColor: this.state.project.color,
    }
    return (
      <View style={[styles.headerContainer, projectStyle]}>
        <Text style={[styles.header]}>{this.state.project.title}</Text>
      </View>
    )
  }

  renderFeature(feature) {
    return (
      <ScheduledFeature
        feature={feature} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.scheduledForToday}>
          <Text style={[styles.title]}>{'Scheduled For Today'}</Text>
          <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={(feature) => this.renderFeature(feature)}
            />
        </View>
      </View>
    );
  }
};

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor:'#565868',
    marginTop: 0,
    paddingBottom: 0,
  },

  header: {
    color:'#666',
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
  scheduledForToday: {
    backgroundColor:'#F7F7F7',
    borderRadius:5,
    margin:5,
    padding:10,
  },
  listView: {
    flex: 1,
  }
});

module.exports = ProjectView;