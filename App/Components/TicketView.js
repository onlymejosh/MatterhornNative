'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var Header = require('./Header');
var styles = require('../Styles/TicketView');

var {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  Component
} = React;


class TicketView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var ticket = this.props.route.passProps.ticket;
    return (
      <View>
        <Header onSideMenu={() => console.log()} title="Dashboard"></Header>
        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            <Text style={[styles.label,{paddingLeft:5, paddingTop:5,paddingRight:5}]}>Feature</Text>
            <View style={styles.featureDropdown}>
              <Text style={[styles.label]}>Tickets</Text>
                <Icon
                  name='fontawesome|remove'
                  size={15}
                  color={'rgba(233, 114, 91, 0.5)'}
                  style={{width: 15,height: 15,position:'absolute',top:4,right:10}}
                />
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <View style={[styles.featureDropdown,{marginRight:2}]}>
              <Text style={[styles.label]}>Other</Text>
                <Icon
                  name='fontawesome|remove'
                  size={15}
                  color={'rgba(233, 114, 91, 0.5)'}
                  style={{width: 15,height: 15,position:'absolute',top:4,right:10}}
                />
            </View>
            <View style={[styles.featureDropdown,{marginRight:2}]}>
              <Text style={[styles.label]}>Alessandro</Text>
                <Icon
                  name='fontawesome|remove'
                  size={15}
                  color={'rgba(233, 114, 91, 0.5)'}
                  style={{width: 15,height: 15,position:'absolute',top:4,right:10}}
                />
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <View style={[styles.featureDropdown,{marginRight:2}]}>
              <Text style={[styles.label]}>Inprogress</Text>
                <Icon
                  name='fontawesome|remove'
                  size={15}
                  color={'rgba(233, 114, 91, 0.5)'}
                  style={{width: 15,height: 15,position:'absolute',top:4,right:10}}
                />
            </View>

            <View style={[styles.container,{alignItems:'center',}]}>
              <View style={[styles.sizingContainer]}>
                <View style={styles.sizeContainer}>
                  <Text style={[styles.ticketSize]}>?</Text>
                </View>
                <View style={styles.sizeContainer}>
                  <Text style={[styles.ticketSize]}>S</Text>
                </View>
                <View style={styles.sizeContainer}>
                  <Text style={[styles.ticketSize]}>M</Text>
                </View>
                <View style={[styles.sizeContainer,{backgroundColor:'#E69380'}]}>
                  <Text style={[styles.ticketSize]}>L</Text>
                </View>
                <View style={[styles.sizeContainer,{marginRight:0}]}>
                  <Text style={[styles.ticketSize]}>XL</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.ticketTitle}>#{ticket.local_id} {ticket.title}</Text>
          </View>
        </View>
      </View>
    );
  }
};

module.exports = TicketView;
