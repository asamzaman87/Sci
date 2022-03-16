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
import { SafeAreaView } from 'react-navigation'

import { Button } from "react-native-paper";
export default class Login extends Component {

constructor(props) {
      super(props)
      this.state = {
        text: '',
        psw:'',
      }
    }



  render() {
    return (
<SafeAreaView >
      
      <View style={styles.top}>
        <Image 
                source={require("../assets/favicon.png")}
                style={styles.imageStyle}
                />
      </View>              



        <View style={styles.container}>
           <View style={styles.login}>
             <Text style={{textAlign: 'center', fontSize: 20}}> SIGN UP </Text>
          </View>
        <TextInput
          style={{height: 40, width: Dimensions.get('window').width - 60, borderColor: '#959595', borderWidth: 2, marginTop: 20,  paddingLeft: 8, fontSize: 15, borderRadius: 15, padding: 2}} 
          placeholder='email'
          onChangeText={(text) => this.setState({text})}
        />

        <TextInput 
          style={{height: 40, width: Dimensions.get('window').width - 60, borderColor: '#959595', borderWidth: 2, marginTop: 20, paddingLeft: 8, fontSize: 15, borderRadius: 15, padding: 2}} 
          placeholder='password'
          onChangeText={(psw) => this.setState({psw})}
        />


        <TouchableHighlight 
          style={{ marginTop: 60, height: 40, width: Dimensions.get('window').width - 60, backgroundColor: '#ff8447', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} 
          onPress={()=>{alert("Email: "+this.state.text +"  PASSWORD: "+this.state.psw)}}
          activeOpacity={0.7}
        >
        <Text style={{color: 'white'}}>Login</Text>
        </TouchableHighlight>
      </View>



      <Button style={{marginTop:40}}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          Log In
        </Button>

        <Button
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          Profile
        </Button>
 
      
    </SafeAreaView>
    
    );
  }

btnClick=()=>{
  alert(this.state.text)
}

pswClick (){
  alert(this.state.psw)
}


}

const styles = StyleSheet.create({
  container: {

    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
 
  },

  top:{
    backgroundColor:"#C4C4C4",
    width: Dimensions.get('window').width, 
    height: 100, 
    justifyContent: 'center', 

  },

  login:{

    width: Dimensions.get('window').width, 
    height: 60, 
    justifyContent: 'center', 
    marginTop:60
  },

  txtCenter: {
    fontSize: 17,
  },

  button:{
    backgroundColor:'red'
  },
  imageStyle: {
    alignSelf: 'center',
    width: 70,
    height: 70, 

 },
});

