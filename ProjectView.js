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
    }
  }
  render() {
    // var property = this.props.property;
    // var stats = property.bedroom_number + ' bed ' + property.property_type;
    // if (property.bathroom_number) {
    //   stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
    //     ? 'bathrooms' : 'bathroom');
    // }

    // var price = property.price_formatted.split(' ')[0];

    return (
      <View>
        <Text>Overview fam</Text>
      </View>
    );
  }
};

module.exports = ProjectView;