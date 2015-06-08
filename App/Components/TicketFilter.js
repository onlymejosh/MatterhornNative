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
    }
    this.state.filters = this.props.filters || ["To Do", "In Progress", "Completed"]
    this.state.filterValues = this.props.filterValues || ["todo", "inprogress", "completed"]
  }

  _onPressButton(index) {
    this.setState({index: index.index})
    this.props.onClick(this.state.filterValues[index.index])
  }


  render() {

    return (
      <View style={{backgroundColor:'#F7F7F7'}}>
        <SegmentedView
            titles={this.state.filters}
            index={this.state.index}
            stretch
            barColor={'#9F87BE'}
            underlayColor={'#F7F7F7'}
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            onPress={index => this._onPressButton({ index })}
        />

      </View>

    );
  }
}

module.exports = TicketFilter;
