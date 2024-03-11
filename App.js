import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginSreen from './LoginSreen';
import MainPage from './MainPage';
import Contact from './Contact';
import Enquiry from './Home';
import AddContact from './AddContact';
import EditContact from './EditContact';
import Map from './Map';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="log" component={LoginSreen} options={{title: ''}}/>
        <Stack.Screen name="home" component={MainPage} options={{title: ''}}/>
        <Stack.Screen name="Enq" component={Enquiry} options={{title: ''}}/>
        <Stack.Screen name="contact" component={Contact} options={{title: ''}}/>
        <Stack.Screen name="Add Contact" component={AddContact} options={{title: ''}}/>
        <Stack.Screen name="Edit Contact" component={EditContact} options={{title: ''}}/> 
        <Stack.Screen name="map" component={Map} options={{title:''}} /> 
      </Stack.Navigator>       
    </NavigationContainer>
  );
};

export default App
