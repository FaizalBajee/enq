import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AddContact = ({navigation}) => {

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [location,setLocation]=useState('')

    handleAdd=()=>{

        if(name.length==0){
            alert("Enter the Name")
            return;
        }
        if(phone.length==0){
            alert("Enter the Number")
            return;
        }
        if(location.length==0){
            alert("Enter the Location")
            return;
        }
    
        //http://173.0.0.67:8112/enquiry/AddContact.php
        fetch("http://173.0.0.247:8112/enquiry/AddContact.php",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                Name:name,
                Phone:phone,
                Location:location
            })
        }).then((Response)=>Response.json())
            .then(Response=> alert(Response))
            navigation.navigate('contact')

    }

  return (
    <View style={styles.container}>
       <View style={{marginTop:200, alignItems:'center'}}>
        <TextInput style={styles.textinput} 
            placeholder='Name'
            onChangeText={text=>setName(text)}/>
       </View>
       <View style={{ alignItems:'center'}}>
        <TextInput style={styles.textinput} 
            placeholder='Phone'
            onChangeText={text=>setPhone(text)}/>
       </View>
       <View style={{ alignItems:'center'}} >
        <TextInput style={styles.textinput} 
            placeholder='Location'
            onChangeText={text=>setLocation(text)}/>
       </View>
       <View style={{alignItems:'center'}}>
       <TouchableOpacity onPress={handleAdd} style={styles.addbutton}>
         <Text style={{color:'white'}}>Add Contact</Text>
       </TouchableOpacity>
       </View>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({
    container:{
       
        flex:1,
        backgroundColor:'#D3D3D3'
    },
    textinput:{
      
        marginTop:15,
        textAlign: "center",
        marginBottom: 4,
        height: 60,
        borderRadius: 15 ,
        fontSize:20,
        backgroundColor:'white',
        width:350,
        justifyContent:'center'
    },
    addbutton:{
          width:"40%",
          backgroundColor:"#967bb6",
          borderRadius:15,
          height:50,
          alignItems:"center",
          justifyContent:"center",                                                 
          marginBottom:10,
          marginTop:30
    }
})