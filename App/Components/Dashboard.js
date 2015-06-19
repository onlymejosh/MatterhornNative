'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var SideMenu = require('react-native-side-menu');
var SegmentedView = require('react-native-segmented-view')
var Moment = require('moment');
var _ = require('lodash');

var Store = require('../Stores/Matterhorn');
var api = require('../Utils/api.js');

var Header = require('./Header');
var ProjectView = require('./ProjectView');
var FilterView = require('./FilterView');
var Sidebar = require('./Sidebar');
var Agenda = require('./Agenda');

var styles = require('../Styles/Dashboard');
var filterStyles = require('../Styles/TicketFilterStyles');

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
      loaded: false,
      filterViewIndex:1,
      filters: ['Notifications','Agenda','Activity Feed'],
      filterValues: ['notifications','agenda','activityFeed'],
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    var menu = <Sidebar store={this.state.store}
                        navigator={this.props.navigator}></Sidebar>
    return (
      <SideMenu menu={menu}
                touchToClose={true}
                disableGestures={true}
                openMenuOffset={'300'}
                ref="sideMenu">
        <View style={{flex:1, backgroundColor:'#DCDCDC'}}>
          <Header onSideMenu={() => this.handleSidebar()} title="Dashboard" />
          <FilterView
            index={this.state.filterViewIndex}
            filters={this.state.filters}
            filterValues={this.state.filterValues}
            onClick={() => console.log(this)}
          />
          <ScrollView style={{flex:1,paddingTop:0}}>
            <Agenda
              store={this.state.store}
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
        // This is a really backwards way of building a store
        // It feels like I'm reinventing the wheel to do this.
        // Alt looks like the better alternative.
        var tempStore = new Store({
          projects:responseData.projects,
          features:responseData.features,
          tickets:responseData.tickets,
        });

        this.setState({
          store: tempStore,
          loaded: true,
        });
      })
      .catch((response) =>{
      })
      .done();
  }
}

module.exports = Dashboard
