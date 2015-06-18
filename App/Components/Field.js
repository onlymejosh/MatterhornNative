'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Component
} = React;

class Field extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View>
        <View style={styles.fieldContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }

}
module.exports = Field;


var styles = StyleSheet.create({
  fieldContainer: {
    flex:1,
    flexDirection: 'row',
    padding:5,
    paddingTop:8,
    paddingBottom:8,
    borderBottomWidth:1,
    borderColor:'#f2f2f2',
  }
});
