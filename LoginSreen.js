import React, { Component } from 'react';
import {  StyleSheet, View, TextInput, Button, Text, Alert, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class LoginSreen extends Component {
constructor() {
    super()
    this.state = {
      UserEmail: "",
      UserPassword: ""
    }
  }
UserLogin = () =>{
  var E=this.state.UserEmail
  var P=this.state.UserPassword

  if(E.length==0){
    alert('Enter the Email')
    return;
  }
  if(P.length==0){
    alert('Enter the Password')
    return;
  }
  this.props.navigation.navigate("home");
  fetch("http://173.0.0.247:8112/enquiry/LoginUser.php",{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Email:this.state.UserEmail, 
      Password:this.state.UserPassword 
    })

  }).then((response) => response.json())
      .then((response) => {
        alert(response)
         if (response == "Successfully Login") {
           this.props.navigation.navigate("home");
        }
        }).catch((error) => {
          alert(error);
        });

}
  render() {
    return (
<View style={styles.MainContainer}>
      <FontAwesome5 name='user-alt' style={{fontSize:70,marginLeft:160,color:'grey'}} />
        <Text style= {styles.title}>Login</Text>

        <TextInput
          placeholder="Enter User Email"
          onChangeText={text => this.setState({UserEmail : text})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
        <TouchableOpacity style={styles.logbutton} onPress={this.UserLogin} >
          <Text style={{fontSize:20}}>Login</Text>
          </TouchableOpacity>
</View>
            
    );
  }
}

const styles = StyleSheet.create({
MainContainer: {
  marginTop:100,
  justifyContent:'center',
    margin:10,

  },
  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 55,
    borderWidth: 1,
    borderColor: "#967bb6",
    borderRadius: 5 ,
    fontSize:20,
    backgroundColor: '#f8f6f9'
  },
  title:{
    fontSize: 49,
    color: "#967bb6",
    textAlign:"center",
    padding:30,
    marginBottom: '44'
  },
  logbutton:{
    width:"80%",
    backgroundColor:"#E0C6FF",
    borderRadius:15,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    marginLeft:40
  }
  });
