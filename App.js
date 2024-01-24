import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';


import StackNavigator from './StackNavigator.js';
import { FitnessContext } from './Context.js';

export default function App() {
  return (
    <FitnessContext>
         <StackNavigator/>
    </FitnessContext>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  
  },
});
