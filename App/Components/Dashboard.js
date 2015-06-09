'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var SideMenu = require('react-native-side-menu');
var Moment = require('moment');
var _ = require('../Utils/lodash.underscore.js');

var api = require('../Utils/api.js');

var Header = require('./Header');
var ProjectView = require('./ProjectView');
var Sidebar = require('./Sidebar');
var Agenda = require('./Agenda');

var styles = require('../Styles/Dashboard');


var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Component
} = React;

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
        <View style={{flex:1, backgroundColor:'#DCDCDC'}}>
          <Header onSideMenu={() => this.handleSidebar()}
                  title="Dashboard" />
          <ScrollView style={{flex:1,paddingTop:0}}>
            <Agenda
              projects={this.state.projects}
              features={this.state.features}
              tickets={this.state.tickets}
              navigator={this.props.navigator}>
            </Agenda>
          </ScrollView>
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
