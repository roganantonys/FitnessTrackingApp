import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen.js';
import WorkOutScreen from './screens/WorkOutScreen.js';
import WorkoutTrackScreen from './screens/WorkoutTrackScreen.js';
import RestScreen from './screens/RestScreen.js';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Workout" component={WorkOutScreen} />
            <Stack.Screen name="WorkoutTracking" component={WorkoutTrackScreen} />
            <Stack.Screen name="Rest" component={RestScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})