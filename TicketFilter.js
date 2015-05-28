'use strict';

var React = require('react-native');
var SegmentedView = require('react-native-segmented-view')
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

var styles = React.StyleSheet.create({
  filterBar: {
    backgroundColor:'#fff',
    flexDirection: 'row',
    paddingTop:10,
    paddingBottom:10,
    // justifyContent: 'center',
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  filterButton: {
    flex:1,
    
    justifyContent: 'center',
    // fontWeight:'bold',
  },
  filterText: {
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    fontWeight: 'normal',
    color:'#666',
    justifyContent: 'center',
    textAlign: 'center',
  },
  active: {
    fontWeight:'bold',
    backgroundColor:'red',
  },

});

module.exports = TicketFilter;