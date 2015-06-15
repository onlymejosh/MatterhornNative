'use strict';

var React = require('react-native');
var Moment = require('moment');
var _ = require('lodash');

var ProjectView = require('./ProjectView');
var TodoTicket = require('./TodoTicket');

var styles = require('../Styles/Dashboard');

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class Agenda extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var today = Moment().format('YYYY-MM-DD')
    var tickets = this.props.tickets.filter(ticket => {
      return ticket.due_date === today &&
             ticket.state != 'completed' &&
             ticket.assigned_member_id === 1
    });
    var ticketsForToday = tickets.map(ticket =>{
      var feature = _.findWhere(this.props.features, {
        id:ticket.feature_id
      });
      var project = _.findWhere(this.props.projects, {
        id:feature.project_id
      });
      return _.extend(ticket,{
        project_title: project.title,
        project_id: project.id
      });

    });
    var groupedTickets = _.groupBy(ticketsForToday,'project_title')
    var data = _.map(groupedTickets, (tickets,projectTitle) => {
      return this.renderProjectWithTickets(projectTitle,tickets)
    });

    return(
      <View style={styles.container}>
        {data}
      </View>
    )
  }

  renderProjectWithTickets(projectTitle,tickets) {
    return (
      <View style={styles.projectContainer} key={projectTitle}>
        <View style={styles.agendaHeader}>
          <Text style={styles.headerText}>{projectTitle}</Text>
        </View>
        <View>
          {tickets.map((ticket) => this.renderTicket(ticket)) }
        </View>
      </View>
    )
  }

  renderTicket(ticket) {
    return (
      <TodoTicket key={ticket.id}
                  ticket={ticket}
                  style={styles.todoTicket}
                  navigator={this.props.navigator}></TodoTicket>
    );
  }

  handleTicket(ticket) {
    this.props.navigator.push({
      title: ticket.title,
      component: TicketView,
      passProps: {
        projects:this.props.projects,
        project: project,
        features: features,
        tickets: this.props.tickets,
        ticket: ticket
      },
    });
  }

}

module.exports = Agenda
