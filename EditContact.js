import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { useState } from 'react';

const EditContact = ({route,navigation}) => {

    const {Data}=route.params;

   const [id,setid]=useState(Data.id)
    const [name,setName]=useState(Data.Name)
    const [phone,setPhone]=useState(Data.Phone)
    const [location,setLocation]=useState(Data.Location)
 
  //http://173.0.0.67:8112/enquiry/EditContact.php
   const handleEdit=()=>{
            //alert(name+" "+phone+" "+location)
            fetch("http://173.0.0.247:8112/enquiry/EditContact.php",{
               method:'PUT',
               headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                  id:id,
                  Name:name,
                  Phone:phone,
                  Location:location
                })
            }).then((Response)=>{Response.json()})
            .then((Response)=>alert('Edited!'))
            .catch(error=>{alert(error)})
            navigation.navigate('contact')
    }

  return (
    <View style={styles.container}>
       <View style={{marginTop:200, alignItems:'center'}}>
        <TextInput style={styles.textinput} 
            value={name}
            onChangeText={name=>setName(name)}/>
       </View>
       <View style={{ alignItems:'center'}}>
        <TextInput style={styles.textinput} 
            value={phone}
            onChangeText={phone=>setPhone(phone)}/>
       </View>
       <View style={{ alignItems:'center'}} >
        <TextInput style={styles.textinput} 
            value={location}
            onChangeText={text=>setLocation(text)}/>
       </View>
       <View style={{alignItems:'center'}}>
       <TouchableOpacity onPress={handleEdit} style={styles.addbutton}>
         <Text style={{color:'white'}}>Edit Contact</Text>
       </TouchableOpacity>
       </View>
    </View>
    
  )
}

export default EditContact

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