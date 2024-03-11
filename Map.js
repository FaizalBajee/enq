//AIzaSyA1tKuhrDydQSO2AqxlizXac3mIczPD2eY
// 1F:3E:E5:DE:22:D1:30:70:56:2F:B6:16:C4:19:D8:0F:15:89:B8:9D
import { Button, StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import { useState,useEffect,useRef } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
//http://localhost:8112/Map/Map.php
const Map = () => {


 const mapRef = useRef();
  //State
  const [locationLat, setLocationLat] = useState('') 
  const [locationLong, setLocationLong] = useState('')

                  
  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert("Please grant location permissions");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocationLat(currentLocation.coords.latitude);
      setLocationLong(currentLocation.coords.longitude);
     //alert('latitude:'+location.coords.latitude+',  longitude:'+location.coords.longitude);   
    };
    getPermissions();

  }, []);

  const loc =()=>{
   alert(locationLat+',  '+locationLong)
    if (mapRef) {
      mapRef.current.animateToRegion({
        latitude: locationLat,
        longitude: locationLong,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }

//http://192.168.227.239:8112/Map/Map.php
    fetch("http://173.0.0.247:8112/Map/Map.php",{
      method:'POST',
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
      },
      body:JSON.stringify({
        Latitude:locationLat,
        Longitude:locationLong
      })
    }).then(Response=>Response.json())
      //.then(Response=>{alert(Response+' =latitude'+locationLat+'  ,longitude'+locationLong)})
      .catch(error=>{alert(error)})
  }

const initialRegion={

    latitude: 8.17880,
    longitude: 77.42261,
    latitudeDelta: 20,
    longitudeDelta: 20,
  
}

  return (
    <View>

      <MapView style={styles.map} 
       ref={mapRef}
       showsUserLocation 
       initialRegion={initialRegion}
      >
           {/* <Marker 
                coordinate={{
                  latitude: locationLat,
                  longitude: locationLong,
                  latitudeDelta:0,
                  longitudeDelta:0,
                }} ></Marker> */}
      </MapView>
      
      <View style={{width:'50%',alignItems:'center',justifyContent:'center',marginTop:650,marginLeft:100,borderRadius:30,position:'absolute'}}>
        <Button title='Current Location' onPress={loc} style={styles.button} />
      </View>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
        map:{
          alignItems:'center',
            width:'100%',
            height:'100%'
        },
        button:{
          position:'relative',
          borderRadius:30,
          width:50,
          marginTop:50
        }
})





// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
// import * as Location from 'expo-location';

// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     //alert('')
//     const getPermissions = async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         alert("Please grant location permissions");
//         return;
//       }

//       const currentLocation = await Location.getCurrentPositionAsync({});
//       alert(currentLocation);
//       setLocation(currentLocation);
//       alert("Location:");
      
//     };
//     getPermissions();
//   }, []);

//  const currentLocation =()=>{
//           alert(location)
//     }

//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:30,justifyContent:'center',marginLeft:130}}>Map View</Text>
//       <MapView
//         style={styles.map}
//         //specify our coordinates.
//         // initialRegion={{
//         //   latitude: 37.78825,
//         //   longitude: -122.4324,
//         //   latitudeDelta: 0.0922,
//         //   longitudeDelta: 0.0421,
//         // }}
//       />
//       <View style={{justifyContent:'center',alignItems:'center'}}>        
//         <TouchableOpacity onPress={currentLocation} style={{alignItems:'center',justifyContent:'center' ,backgroundColor:'#967bb6',borderRadius:30,height:30,width:120}}>
//           <Text style={{color:'white',alignItems:'center'}}>Current Location</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={{fontSize:20,padding:60}}>Location:{location}</Text>

//     </View>
//   );
// }

// const styles = StyleSheet.create({

//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   map:{
//           marginLeft:70,
//           alignItems:'center',
//             width:'100%',
//             height:'70%'    
//   }
// });
