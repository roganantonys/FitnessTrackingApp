import {
  StyleSheet,
  Image,
  Pressable,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { fitnessItems } from "../Context";

const WorkOutScreen = () => {
  const route = useRoute();
  const Navigation = useNavigation();
  const {completed, setcompleted} = useContext(fitnessItems);
  return (
    <>
      <ScrollView style={{ backgroundColor: "white", marginTop: 50 }}>
        <Image
          source={{ uri: route.params.image }}
          style={{ width: "100%", height: 170 }}
        />
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="white"
          style={{ position: "absolute", top: 30 }}
          onPress={() => Navigation.goBack()}
        />
        {route.params.excersises.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 90, height: 90 }}
            />
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width: 170 }}>
                {item.name}
              </Text>
              <Text style={{ marginTop: 4, fontSize: 18, color: "grey" }}>
                x{item.sets}
              </Text>
            </View>
            {completed.includes(item.name) ? (
              <AntDesign name="checkcircle" size={24} color="green" style={{marginLeft:40}}/>
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginRight: "auto",
          marginLeft: "auto",
          marginVertical: 20,
          width: 150,
          borderRadius: 20,
        }}
        onPress={() => {
          Navigation.navigate("WorkoutTracking", {
            excersises: route.params.excersises,
          });
          setcompleted([]);
        }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: 20,
          }}>
          START
        </Text>
      </Pressable>
    </>
  );
};

export default WorkOutScreen;

const styles = StyleSheet.create({});
