import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import React, { useContext } from "react";

import FitnessCards from "../components/FitnessCards.js";
import { fitnessItems } from "../Context.js";

const HomeScreen = () => {
  const {mins, calories, workout} = useContext(fitnessItems);
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View style={styles.outerContainer}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Home WorkOut
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}>
          <View>
            <Text style={styles.numberText}>{workout}</Text>
            <Text style={styles.informationText}>WORKOUT</Text>
          </View>
          <View>
            <Text style={styles.numberText}>{calories}</Text>
            <Text style={styles.informationText}>KCAL</Text>
          </View>

          <View>
            <Text style={styles.numberText}>{mins}</Text>
            <Text style={styles.informationText}>MINS</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            style={{
              height: 120,
              width: "90%",
              borderRadius: 7,
              marginTop: 20,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#CD853F",
    padding: 10,
    height: 200,
    width: "100%",
  },
  numberText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  informationText: {
    color: "#d0d0d0",
    fontSize: 17,
    marginTop: 6,
  },
});
