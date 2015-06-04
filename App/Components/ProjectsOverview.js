'use strict';

var React = require('react-native');
var ProjectView = require('./ProjectView');

var styles = require('../Styles/ProjectsOverviewStyles');
var SideMenu = require('react-native-side-menu');
var Sidebar = require('./Sidebar');

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
  projects: 'http://0.0.0.0:3000/api/v1/projects'
};

class ProjectsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      isMenuOpen:true
    }
  }

  handleSideMenuChange() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    var menu = <Sidebar projects={this.state.projects}
                        features={this.state.features}
                        tickets={this.state.tickets}
                        navigator={this.props.navigator}></Sidebar>
    return (
      <SideMenu menu={menu}
        touchToClose='true'
        disableGestures='true'
        onChange={this.handleSideMenuChange.bind(this)}
        openMenuOffset={'300'}
        ref="sideMenu">
        <View style={{flex:1}}>
          {this.renderHeader()}
          <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderProject.bind(this)} />
        </View>
      </SideMenu>

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

  handleSidebar() {
    this.refs.sideMenu.openMenu()
  }

  renderHeader() {
    return (
      <TouchableHighlight onPress={() => this.handleSidebar()}>
      <View style={[styles.headerContainer]}>
        <Text style={[styles.header]}>{'Projects'}</Text>
      </View>
      </TouchableHighlight>
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
        'Authorization':this.props.route.passProps.authentication
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
      .catch((response) =>{
      })
      .done();
  }
}

module.exports = ProjectsOverview
