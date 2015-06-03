'use strict';

var React = require('react-native');
var NotificationBadge = require('./NotificationBadge');
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

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.headerContainer]}>
          <Text style={[styles.header]}>{'Serious Fox'}</Text>
        </View>
        <View style={styles.dashboardContainer}>
          <Image
            source={{uri: 'http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg'}}
            style={styles.avatar}
          />
          <Text style={styles.mainContent}>My Dashboard</Text>
          <NotificationBadge count={0} style={styles.badge}/>
        </View>
        <View style={styles.projectsContainer}>
          <Text style={styles.projectTitle}>Projects</Text>
        </View>
        <View style={[styles.projectsContainer,{paddingTop:0,marginBottom:12}]}>
          <ScrollView style={{height:550, backgroundColor:'#4A4C59',marginLeft:-13,marginRight:-13}}>
            {this.props.projects.map((project) => this.renderProject(project))}
          </ScrollView>
        </View>
      </View>
    )
  }

  renderProject(project) {
    var projectStyle = {
      borderColor:'#3B3D46',
      borderBottomWidth:1,
      flex:1,
      flexDirection: 'column',
    };
    var marker = {
      backgroundColor:project.color
    };
    return (
      <TouchableHighlight onPress={() => this.renderProject(project.id)}
          underlayColor='#dddddd'>
        <View style={styles.projectsList}>
          <View style={projectStyle}>
            <View style={[styles.marker,marker]}></View>
            <Text style={styles.title}>
              {project.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#4A4C59',
    width:300,
    flex: 1,
  },
  headerContainer: {
    backgroundColor:'#646674',
    marginTop: 0,
    paddingBottom: 0,
  },
  mainContent: {
    flex:1,
    flexDirection: 'column',
    marginLeft:5,
    marginRight:2,
    color:'#fff',
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 7,
  },
  header: {
    color:'#fff',
    fontFamily: 'Proxima Nova',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 12,
    marginLeft: 12,
  },
  dashboardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding:2,
    paddingLeft:4,
    paddingRight:10,
    backgroundColor:'#565867'
  },
  avatar: {
    backgroundColor:'#fff',
    width:30,
    height:30,
  },
  badge: {
    marginTop:20,
  },

  projectsContainer: {
    backgroundColor:'#3B3D46',
    padding:13,
  },
  projectTitle: {
    color:'#fff',
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    fontWeight: '700',
  },
  title: {
    flex:1,
    fontFamily: 'Proxima Nova',
    color:'#fff',
    fontSize: 16,
    padding:12,
    paddingLeft:26,
  },
  marker: {
    position:'absolute',
    top:14,
    left:10,
    width:10,
    height:10,
    borderRadius:5
  }
});
module.exports = Sidebar
