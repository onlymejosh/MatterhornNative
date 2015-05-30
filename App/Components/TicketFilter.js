'use strict';

var React = require('react-native');
var SegmentedView = require('react-native-segmented-view')
var styles = require('../Styles/TicketFilterStyles');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Component
} = React;

class TicketFilter extends Component {
  constructor(props) {
    super(props);
    this.selected = this.props.selected || 'todo'
    this.state = {
      index:0,
      filters: ["To Do", "In Progress", "Completed"],
      filterValues: ["todo", "inprogress", "completed"]
    }
  }

  _onPressButton(index) {
    this.setState({index: index.index})
    this.props.onClick(this.state.filterValues[index.index])
  }


  render() {

    return (
      <View>
        <SegmentedView
            titles={this.state.filters}
            index={this.state.index}
            stretch
            onPress={index => this._onPressButton({ index })}
        />

      </View>

    );
  }
}

module.exports = TicketFilter;
