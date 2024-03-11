import { View,Text, ScrollView,Alert, TouchableOpacity,navigate } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function MainPage({navigation}) {

 
  const COLORS = [{
    id: 1,
    name:'Contact',
    colors: ['#FC466B', '#3F5EFB']
  },
  {
    id: 2,
    name:'Enquiry',
    colors: ['#00F260', '#0575E6']
  },
  
  {
    id: 3,
    name:'Booking',
    colors: ['#FF0099', '#493240']
  },
  {
    id: 4,
    name:'Map',
    colors: ['#ee9ca7', '#0575E6']
  },
 
  ]

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20,backgroundColor:'#D3D3D3' }}>

      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20}}>
        {COLORS.map((item) => 
            <LinearGradient
                key={item.id}
                colors={item.colors}
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={{ justifyContent: 'center', alignItems: 'center', height: 120, borderRadius: 10, marginBottom: 8,padding:40 }}>
                    
                    <Text 
                        style={{fontSize: 20, fontWeight: '800', color:'#FFF'}} 
                        onPress={()=>{if(item.name=='Enquiry'){navigation.navigate('Enq')}
                                      if(item.name=='Contact'){navigation.navigate('contact')}
                                      if(item.name=='Map'){navigation.navigate('map')}}}>{item.name}</Text>
                    
            </LinearGradient>)}
      </ScrollView>

    </View>
  );
}
