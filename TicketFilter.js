'use strict';

var React = require('react-native');

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
  }
  _handleToDo() {
    console.log(this)
    this._onPressButton('todo')
  }
  _onPressButton(value) {
    console.log(value)
    console.log(this.props)

    this.props.onPress.bind(this,value)
  }
  render() {
    return (
    //   <View style={{flexDirection: 'row'}}>
    //   <View style={{flex: 1, backgroundColor: 'red', height:20}} />
    //   <View style={{flex: 1}} />
    //   <View style={{flex: 1}} />
    // </View>
      <View style={styles.filterBar}>
        <View style={styles.filterButton}>
          <TouchableOpacity onPress={this.props.onClick.bind(this,'todo')}>
            <Text style={styles.filterText}>
              To Do
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterButton}>
          <TouchableOpacity onPress={this.props.onClick.bind(this,'inprogress')}>
            <Text style={styles.filterText}>
              In Progress
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filterButton}>
          <TouchableOpacity onPress={this.props.onClick.bind(this,'complete')}>
            <Text style={styles.filterText}>
              Complete
            </Text>
          </TouchableOpacity>
        </View>
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

});

module.exports = TicketFilter;