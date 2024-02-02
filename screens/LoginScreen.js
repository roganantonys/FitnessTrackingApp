import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const loginWithEmailAndPass = () => {
    console.log(input);
    signInWithEmailAndPassword(auth, input, password)
      .then((res) => {
        Alert.alert("Logged in");
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err); // Log the entire error object for detailed information

        let errorMessage = "Registration failed. Please try again.";

        if (err.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (err.code === "auth/weak-password") {
          errorMessage = "Password is too weak.required atleast 4 characters";
        } else if (err.code === "auth/missing-password") {
          errorMessage = "password field is empty";
        } else if (err.code === "auth/invalid-email") {
          errorMessage = "enter the email";
        }

        Alert.alert("Registration Failed", errorMessage);
      });
  };

  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-photo/man-training-with-dumbbells-smoke_23-2147752875.jpg?w=740&t=st=1706877650~exp=1706878250~hmac=2cbc1279441668f7fb115f60f52e536fc49aa0a384fa6d3477b1a63219344027",
      }}
      style={{ flex: 1 }}
      
      >
      <SafeAreaView
        style={{
          padding: 10,
          alignItems: "center",
        }}>
        <KeyboardAvoidingView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}></View>
          <View style={{ width: 320, marginTop: 90 }}>
            <Input
              value={input}
              onChangeText={(text) => setInput(text)}
              type="email"
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="Email"
              placeholderTextColor={"white"}
              style={{
                width: 330,
                padding: 15,
                borderRadius: 5,
                color: "white",
                backgroundColor: "grey",
              }}
            />
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              type="password"
              secureTextEntry={true}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              placeholder="Password"
              placeholderTextColor={"white"}
              style={{
                width: 330,
                padding: 15,
                borderRadius: 5,
                color: "white",
                backgroundColor: "grey",
              }}
            />
          </View>
          <Pressable
            onPress={loginWithEmailAndPass}
            style={
              password.length > 4
                ? {
                    backgroundColor: "red",
                    width: 300,
                    marginLeft: "auto",
                    marginRight: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 50,
                    borderRadius: 10,
                  }
                : {
                    width: 300,

                    marginLeft: "auto",
                    marginRight: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "white",
                    borderWidth: 2,
                    height: 50,

                    borderRadius: 10,
                  }
            }>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "700",
                color: "white",
              }}>
              Sign In
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{
              width: 300,
              marginTop: 15,
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              height: 50,
            }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "700",
                color: "white",
              }}>
              New to Fitness?Sign Up
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
