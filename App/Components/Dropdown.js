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

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  _iconName(){
    `fontawesome|${this.props.iconName}`
  }
  render(){
    return (
      <View style={styles.featureDropdown}>
        <Text style={[styles.label]}>{this.props.labelText}</Text>
          <Icon
            name={this._iconName()}
            size={15}
            color={'rgba(233, 114, 91, 0.5)'}
            style={{width: 15,height: 15,position:'absolute',top:4,right:10}}
          />
      </View>
    );
  }
}


Dropdown.propTypes = {
  labelText: React.PropTypes.text,
  iconName: React.PropTypes.text
}

module.exports = Dropdown;


var styles = StyleSheet.create({
  label: {
    color: '#666',
    fontFamily:'Proxima Nova',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  featureDropdown: {
    position:'relative',
    borderRadius:3,
    padding:5,
    borderWidth:1,
    borderColor:'#dcdcdc',
    flex:1,
  },
});
