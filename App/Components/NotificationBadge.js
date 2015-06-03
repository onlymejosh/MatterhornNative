'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class NotificationBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.count}>{this.props.count}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#EB7163',
    alignItems:'center',
    padding:2,
    paddingLeft:4,
    paddingRight:4,
    borderRadius:100
  },
  count: {
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
    color:'#fff'
  }
});
module.exports = NotificationBadge
