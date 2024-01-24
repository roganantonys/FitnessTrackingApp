import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FitnessData from "../data/FitnessData.js";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const fitness = FitnessData;
  const Navigation = useNavigation();
  return (
    <View style={{ marginTop: 50 }}>
      {fitness.map((item, key) => (
        <Pressable
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
          key={key}
          onPress={() => {
            return Navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            });
          }}>
          <Image
            style={{ width: "90%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              fontWeight: "bold",
              color: "white",
              left: 25,
              top: 10,
            }}>
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 25,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
