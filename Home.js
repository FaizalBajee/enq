import { Text, View ,StyleSheet,TouchableOpacity,FlatList,TextInput,Alert, Button} from 'react-native'
import React, { Component } from 'react'


export class Enquiry extends Component {
    constructor(){
        super()
        this.state={
            Name:"",
            Number:"",
            Model:"",
            Variant:"",
            Location:"",
            dataSource:[],            
        }
    }

    handleUpdate=()=>{
      var NAME=this.state.Name;
      var NUMBER=this.state.Number;
      var MODEL=this.state.Model;
      var VARIANT=this.state.Variant;
      var LOCATION=this.state.Location;
      if(NAME.length==0){
        alert('Enter the name')
        return;
      }
      if(NUMBER.length==0 || NUMBER.length>10 || NUMBER.length<10){
        alert('Enter the valide Number')
        return;
      }
      if(MODEL.length==0){
        alert('Enter the Model')
        return;
      }
      if(VARIANT.length==0){
        alert('Enter the Variant')
        return;
      }
      if(LOCATION.length==0){
        alert('Enter the Location')
        return;
      }
        fetch("http://173.0.0.247:8112/enquiry/EnquiryUpdate.php", {
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body: JSON.stringify({
              Name:this.state.Name,
              Number:this.state.Number, 
              Model:this.state.Model ,
              Variant:this .state.Variant,
              Location:this.state.Location
            })
          
          }).then((response) => response.json())
              .then((response) => {
                alert(response)
                 
                 })//.catch((error) => {alert("erro1");});
        }
   //http://localhost:8081/enquiry/EnquiryShow.php
    ShowData = () => {
      fetch('http://173.0.0.247:8112/enquiry/EnquiryShow.php',{
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         }
     })
      .then(response => response.json())
      .then((responseJson) => {   
               this.setState({
                  dataSource: responseJson
              })  
      })
      //.catch(error => alert('error'))
    };
    
    

  render() {
    return (
      <View style={styles.container}>
        
            <Text style={styles.heading}>Enquiry Update</Text>
            <View style={{alignItems:'center'}}>
                <TextInput
                    placeholder="Enter User Name"
                    onChangeText={name => this.setState({Name : name})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    />
                <TextInput
                    placeholder="Enter User Number"
                    onChangeText={num => this.setState({Number : num})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    />
                <TextInput
                    placeholder="Enter the Model"
                    onChangeText={model => this.setState({Model : model})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    />   
                <TextInput
                    placeholder="Enter the Variant"
                    onChangeText={variant => this.setState({Variant : variant})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    />
                <TextInput
                    placeholder="Enter the Location"
                    onChangeText={loc => this.setState({Location : loc})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    />
               </View>
                    {/* <Button title='Update' onPress={this.handleUpdate} style={styles.button}/> 

                    <Button title='Show' onPress={this.ShowData} /> */}
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
                    <TouchableOpacity onPress={this.handleUpdate} style={styles.handleup}>
                      <Text style={{color:'white'}}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ShowData} style={styles.handleShow}>
                      <Text style={{color:'white'}}>Show</Text>
                    </TouchableOpacity>
                    </View>
               <View style={styles.listView}>
               <Text style={styles.list}>Name</Text>
               <Text style={styles.list}>Number</Text>
               <Text style={styles.list}>Model</Text>
               {/* <Text style={styles.list}>Variant</Text> */}
               <Text style={styles.list}>Location</Text>
               </View>
                    <FlatList
                      data={this.state.dataSource}
                       renderItem={(data)=><View style={{backgroundColor:'#FFC0CB'}}>
                        <TouchableOpacity style={{flexDirection:'row',width:'100%',justifyContent:'space-between',}}>
                        <Text style={{fontSize:12,width:80,height:40}}>{data.item.Name}  </Text>
                        <Text style={{fontSize:12,width:90}}>{data.item.Number}  </Text>
                        <Text style={{fontSize:12,width:80}}>{data.item.Model}  </Text>
                        {/* <Text style={{fontSize:15,width:50}}>{data.item.Variant}  </Text> */}
                        <Text style={{fontSize:12,width:80}}>{data.item.Location}  </Text>
                        </TouchableOpacity>
                        </View>}
                    />
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D3D3D3'
       
    },
    heading:{
        fontSize:40,
        textAlign:'center',
        color:'#967bb6'
    },
    TextInputStyleClass: {
        marginTop:15,
        textAlign: "center",
        marginBottom: 4,
        height: 50,
        borderRadius: 15 ,
        fontSize:20,
        backgroundColor:'white',
        width:350,
        
       
      },
      title:{
        fontSize: '55',
        color: "#009688",
        textAlign:"center",
        marginBottom: '15'
      },
      
      list:{
        width:80,
        fontSize:16,
        color:'yellow'
      },
      listView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'grey'
      },
      handleup:{
          width:"40%",
          backgroundColor:"#967bb6",
          borderRadius:15,
          height:50,
          alignItems:"center",
          justifyContent:"center",               
          marginBottom:10,
          marginTop:10
        
          },
      handleShow:{
          width:"40%",
          backgroundColor:"#967bb6",
          borderRadius:15,
          height:50,
          alignItems:"center",
          justifyContent:"center",                                                 
          marginBottom:10,
          marginTop:10
          }

});
export default Enquiry