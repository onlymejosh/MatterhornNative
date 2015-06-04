'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var SideMenu = require('react-native-side-menu');

var api = require('../Utils/api.js');
var ProjectView = require('./ProjectView');
var Sidebar = require('./Sidebar');
var styles = require('../Styles/Dashboard');
var Header = require('./Header');

var {
  AppRegistry,
  Image,
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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
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
                touchToClose={true}
                disableGestures={true}
                openMenuOffset={'300'}
                ref="sideMenu">
        <View style={{flex:1}}>
          <Header onSideMenu={() => this.handleSidebar()}
                  title="Dashboard" />
          <View style={{flex:1,paddingTop:0,backgroundColor:'#fff'}}>
            <Text>TODO:  BRO</Text>
          </View>
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

  componentDidMount() {
    this.fetchData('projects');
  }

  fetchData(model) {
    api.getProjects(this.props.route.passProps.authentication)
      .then((responseData) => {
        this.setState({
          projects:responseData.projects,
          features:responseData.features,
          tickets:responseData.tickets,
          loaded: true,
        });
      })
      .catch((response) =>{
      })
      .done();
  }
}

module.exports = Dashboard
