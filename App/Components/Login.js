'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');
var Dashboard = require('./Dashboard');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  Component
} = React;

var styles = require('../Styles/LoginStyles');

var URLS = {
  login: 'http://api.matterhorn.dev/users/sign_in'
};


var Form = t.form.Form;

var Auth = t.struct({
  email: t.Str,              // a required string
  password: t.Str,  // an optional string
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  onPress() {
    // call getValue() to get the values of the form
    var data = this.refs.form.getValue();

    if (data) { // if validation fails, value will be null
      this.setState({
        value:data,
        isLoading:true,
        errorText:null
      });
      this.login(data)
        .then((response) => {
          this.setState({isLoading:false});
          var token = `Token user_token="${response['user_token']}", user_email="${response['user_email']}"`
          AsyncStorage.setItem('@MatterhornNative:authentication',token).then(() => {
            this.props.navigator.replace({
              component: Dashboard,
              passProps: {
                authentication: token
              }
            });
          });
        })
        .catch((response) => {
          this.setState({isLoading:false});
          this.setState({errorText:'Invalid email or password.'});
        })
    }
  }

  render() {
    var options = {
      auto:'placeholders',
      fields: {
        email: {
          keyboardType: 'email-address',
          error: 'We need a valid email address'
        },
        password: {
          password: true,
          error: 'We need a valid password'
        },
      }
    }
    return (
      <View style={styles.container}>
        <Form
          style={styles.login}
          type={Auth}
          options={options}
          value={this.state.value}
          ref="form" />

          <Text>
            {this.state.errorText}
          </Text>
        <TouchableHighlight style={styles.button}
          onPress={this.onPress.bind(this)}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        {this.state.isLoading && this.renderLoadingView()}
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          style={[styles.centering, styles.gray, {height: 80}]}
          hidden='true'
          size='large'/>
      </View>
    );
  }

  login(data) {
    return fetch(URLS.login,{
      headers: {
        'Accept':'application/json, text/javascript',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
      method:'post',
      body: `user[email]=${data.email}&user[password]=${data.password}`,
    })
    .then((response) => {
      if (response.status === 201 || response.status === 0) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(response)
      }
    })
    .then((response) => {
      return response.json()
    })
  }
}

module.exports = Login
