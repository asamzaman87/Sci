import React,{Component} from 'react'
import {
    View,
    AlertIOS,
    TouchableHighlight,
    ActivityIndicator,
    StyleSheet,
    Alert,
    Text,
    Image,
    AppRegistry,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableOpacity,
    Switch
} from 'react-native'
import { Button } from "react-native-paper";
import { SafeAreaView } from 'react-navigation'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{flexDirection:"column",alignItems:"center"}}>
        <Button  style={{marginTop:0.4*Dimensions.get('window').height, alignSelf:"center"}}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          Login
        </Button>

        <Button
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          Sign Up
        </Button>
      </SafeAreaView>
    );
  }
}


