'use strict';

var React = require('react-native');
var Icon = require('FAKIconImage');
var SideMenu = require('react-native-side-menu');

var Header = require('./Header');

var Field = require('./Field');
var styles = require('../Styles/TicketView');

var KeyboardEvents = require('react-native-keyboardevents');
var KeyboardEventEmitter = KeyboardEvents.Emitter;

var {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Component
} = React;


class TicketView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyboardSpace: 0,
      comment:''
    };

    this.updateKeyboardSpace = this.updateKeyboardSpace.bind(this);
    this.resetKeyboardSpace = this.resetKeyboardSpace.bind(this);
  }

  updateKeyboardSpace(frames) {
    this.setState({keyboardSpace: frames.end.height + 26});
  }

  resetKeyboardSpace() {
    this.setState({keyboardSpace: 0});
  }

  componentDidMount() {
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
    KeyboardEventEmitter.on(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
  }

  componentWillUnmount() {
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardDidShowEvent, this.updateKeyboardSpace);
    KeyboardEventEmitter.off(KeyboardEvents.KeyboardWillHideEvent, this.resetKeyboardSpace);
  }

  _onSubmitComment() {
    // Save the comment.
    this.setState({comment:''});
    this.refs.commentBox.blur();
  }
  render() {
    var ticket = this.props.route.passProps.ticket;
    var menu = <View></View>
    return (
      <SideMenu menu={menu}
                touchToClose={true}
                disableGestures={true}
                openMenuOffset={'300'}
                ref="sideMenu">
        <View style={styles.container}>
          <Header onSideMenu={() => console.log()}
                  title={`#${ticket.local_id} ${ticket.title}`}
                  iconName="arrow-left"
                  iconSize={15}></Header>
          <Field>
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
          </Field>

          <Field>
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
          </Field>

          <Field>
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
          </Field>

          <Field>
            <Text style={styles.ticketTitle}>#{ticket.local_id} {ticket.title}</Text>
            <Text style={styles.ticketDescription}>{ticket.description}</Text>
          </Field>

          <View style={styles.keyboardContainer}>
            <TextInput
              ref="commentBox"
              style={styles.textbox}
              keyboardType={'twitter'}
              onChangeText={(text) => this.setState({comment: text})}
              value={this.state.comment} />
            <TouchableOpacity onPress={() => this._onSubmitComment()}>
              <Text style={styles.sendButton}>Send</Text>
            </TouchableOpacity>
            <View style={{height: this.state.keyboardSpace, backgroundColor:'#000'}}></View>
          </View>


        </View>
      </SideMenu>
    );
  }
};

module.exports = TicketView;
