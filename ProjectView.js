'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image, 
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
    }
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

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <Text>Overview fam</Text>
      </View>
    );
  }
};

var styles = React.StyleSheet.create({
  container: {
    flex: 1
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
});

module.exports = ProjectView;