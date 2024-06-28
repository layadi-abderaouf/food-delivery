import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {Provider} from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let auto = null
import { store } from './store';
//components
import Home from './screens/Home'
import Restaurant from './screens/Restaurant';
import Basket from './screens/Basket';
import Priparing from './screens/Priparing';
import Delivery from './screens/Delivery';


if(Platform.OS === "android" || Platform.OS === "ios"){
  auto = require('react-native-url-polyfill/auto')
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Provider store={store}>
      <TailwindProvider>
         <Stack.Navigator>
             <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Priparing" component={Priparing}
               options={{  presentation:"fullScreenModal",headerShown : false}} />
             <Stack.Screen name="Restaurant" component={Restaurant} />
             <Stack.Screen name="Delivery" component={Delivery} 
               options={{  presentation:"fullScreenModal",headerShown : false}}/>
             <Stack.Screen name="Basket" component={Basket}  
               options={{  presentation:"modal",headerShown : true}} /> 
         </Stack.Navigator>
      </TailwindProvider>
    </Provider>
   
    
  </NavigationContainer>
  );
}


