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
var Ticket = require('./Ticket');

var styles = require('../Styles/Dashboard');


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
            {this.renderTicketsForToday()}
          </View>
        </View>
      </SideMenu>
    );
  }

  // returns Array
  // [{
  //   ticket attributes...
  //   project_title: 'OMG PROJECT',
  //   project_id: 1,
  // }]
  renderTicketsForToday(){
    var today = Moment().format('YYYY-MM-DD')
    var tickets = this.state.tickets.filter(ticket => {
      return ticket.due_date === today &&
             ticket.state != 'completed' &&
             ticket.assigned_member_id === 1
    });
    var ticketsForToday = tickets.map(ticket =>{
      var feature = _.findWhere(this.state.features, {
        id:ticket.feature_id
      });
      var project = _.findWhere(this.state.projects, {
        id:feature.project_id
      });
      var feture = this.state.features
      _.extend(ticket,{
        project_title: project.title
        project_id: project.id
      });
    });
    return(
      <View style={{}}>
        {tickets.map((ticket) => this.renderTicket(ticket)) }
      </View>
    )
  }

  renderTicket(ticket) {
    return (<Ticket key={ticket.id}
      ticket={ticket} />)
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
