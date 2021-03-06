'use strict';

var React = require('react-native');
var SideMenu = require('react-native-side-menu');

var Feature = require('./Feature')
var FilterView = require('./FilterView')
var Header = require('./Header');

var styles = require('../Styles/ProjectViewStyles');

var {
  StyleSheet,
  Image,
  ListView,
  ScrollView,
  View,
  Text,
  Component
} = React;


class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      features: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true
      }),
    };
    var features = [];
    for(var feature of this.props.route.passProps.features) {
      feature.tickets = this.props.route.passProps.tickets
        .filter(ticket =>
          ticket.feature_id == feature.id)

      features.push(feature)
    }
    // this.state.features = this.state.features.cloneWithRows(features)
    this.state.unFilteredFeatures = JSON.parse(JSON.stringify(features));
  }

  componentWillMount() {
    // set the initial state of the tickets
    this.handleState('todo');
  }

  renderFeature(feature) {
    return (
      <Feature key={feature.id}
        feature={feature}
        tickets={feature.tickets} />
    );
  }

  handleState(ticket_state) {
    var features = [];
    for(var feature of JSON.parse(JSON.stringify(this.state.unFilteredFeatures))) {
      feature.tickets = feature.tickets.filter(ticket => ticket.state === ticket_state)
      features.push(feature)
    }
    this.setState({features: this.state.features.cloneWithRows(features)})
  }

  handleSidebar() {
    this.refs.sideMenu.openMenu()
  }

  render() {
    var Sidebar = require('./Sidebar');
    var menu = <Sidebar projects={this.props.route.passProps.projects}
                        features={this.props.route.passProps.features}
                        tickets={this.props.route.passProps.tickets}
                        navigator={this.props.navigator}></Sidebar>
    return (
      <SideMenu menu={menu}
                touchToClose={true}
                disableGestures={true}
                openMenuOffset={'300'}
                ref="sideMenu">
        <View style={styles.container}>
          <Header onSideMenu={() => this.handleSidebar()}
                  title={this.props.route.passProps.project.title} />

          <FilterView onClick={this.handleState.bind(this)}/>
          <ListView
            style={styles.listView}
            dataSource={this.state.features}
            renderRow={(feature) => this.renderFeature(feature)}
            />
        </View>
      </SideMenu>
    );
  }
};

module.exports = ProjectView;
