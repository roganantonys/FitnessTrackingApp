import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fitnessItems } from "../Context";

const WorkoutTrackScreen = () => {
  const route = useRoute();
  const Navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersises = route.params.excersises;
  const current = excersises[index];
  const {
    completed,
    setcompleted,
    mins,
    setMins,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(fitnessItems);

  return (
    <SafeAreaView>
      <Image
        source={{ uri: current.image }}
        style={{ width: "100%", height: 370 }}
      />
      <Text
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}>
        {current.name}
      </Text>
      <Text
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}>
        x{current.sets}
      </Text>
      {index + 1 >= excersises.length ? (
        <Pressable
          onPress={() => {
            Navigation.navigate("Home");
          }}
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "blue",
            marginTop: 50,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}>
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            Navigation.navigate("Rest");
            setcompleted([...completed, current.name]);

            setWorkout(workout + 1);
            setMins(mins + 1);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(() => index + 1);
            }, 2000);
          }}
          style={{
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "blue",
            marginTop: 50,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
            }}>
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        disabled={index === 0}
        onPress={() => {
          Navigation.navigate("Rest");
          setTimeout(() => {
            setIndex(index - 1);
          }, timeout);
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}>
        <Pressable
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}>
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
            PREV
          </Text>
        </Pressable>
        {index + 1 >= excersises.length ? (
          <Pressable
            onPress={() => {
              Navigation.navigate("Home");
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}>
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              Navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(() => index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}>
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default WorkoutTrackScreen;

const styles = StyleSheet.create({});
