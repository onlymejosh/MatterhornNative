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

class FilterView extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(index) {
    this.setState({index: index.index})
    this.props.onClick(this.props.filterValues[index.index])
  }


  render() {

    return (
      <View style={{backgroundColor:'#F7F7F7'}}>
        <SegmentedView
            titles={this.props.filters}
            index={this.props.index}
            stretch
            barColor={'#9F87BE'}
            barPosition={'bottom'}
            underlayColor={'#F7F7F7'}
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            onPress={index => this._onPressButton({ index })}
        />

      </View>

    );
  }
}

FilterView.defaultProps = {
  index: 0,
  filters: ["To Do", "In Progress", "Completed"],
  filterValues: ["todo", "inprogress", "completed"]
};
module.exports = FilterView;
