'use strict';

var React = require('react-native');
var ProjectView = require('./ProjectView');

var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Component
} = React;

var URLS = {
  projects: 'http://api.matterhorn.dev/api/v1/projects'
};

class ProjectsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View style={{flex:1}}>
        {this.renderHeader()}
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderProject.bind(this)} />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          style={[styles.centering, styles.gray, {height: 80}]}
          hidden='true'
          size='large'/>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={[styles.headerContainer]}>
        <Text style={[styles.header]}>{'Projects'}</Text>
      </View>
    )
  }

  rowPressed(id) {
    var project = this.state.projects
      .filter(project => project.id === id)[0];
    var features = this.state.features
      .filter(feature => feature.project_id === project.id);
    this.props.navigator.push({
      title: project.title,
      component: ProjectView,
      backButtonTitle: 'Custom Back',
      passProps: {
        project: project,
        features: features,
        tickets: this.state.tickets
      },
    });
  }

  renderProject(project) {
    var projectStyle = {
      flex: 1,
      borderColor:'#E7E7E7',
      borderBottomWidth:1
    }
    return (
      <TouchableHighlight onPress={() => this.rowPressed(project.id)}
          underlayColor='#dddddd'>
        <View style={styles.projectsList}>
          <View style={projectStyle}>
            <Text style={styles.title}>{project.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  componentDidMount() {
    this.fetchData('projects');
  }

  fetchData(model) {
    fetch(URLS[model],{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Token user_token="cCPvTzMwc9-8rxggmYvh", user_email="josh@seriousfox.co.uk"'
        // 'Authorization':'Token user_token="cCPvTzMwc9-8rxggmYvh", user_email="josh@seriousfox.co.uk"'
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          projects:responseData.projects,
          features:responseData.features,
          tickets:responseData.tickets,
          dataSource: this.state.dataSource.cloneWithRows(responseData.projects),
          loaded: true,
        });
      })
      .done();
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  projectContainer: {
    flex: 1,
    backgroundColor: 'yellow',
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
    fontFamily: 'Proxima Nova',
    fontWeight:'bold',
    color:'#666',
    fontSize: 20,
    padding:15,
  },
  listView: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});

module.exports = ProjectsOverview