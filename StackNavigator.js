import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen.js";
import WorkOutScreen from "./screens/WorkOutScreen.js";
import WorkoutTrackScreen from "./screens/WorkoutTrackScreen.js";
import RestScreen from "./screens/RestScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreeen.js";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkOutScreen} />
        <Stack.Screen name="WorkoutTracking" component={WorkoutTrackScreen} />
        <Stack.Screen name="Rest" component={RestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// navigation.navigate("Plans", { email: input, password: password })

export default StackNavigator;

const styles = StyleSheet.create({});
