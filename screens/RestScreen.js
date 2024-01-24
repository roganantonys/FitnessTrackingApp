import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const Navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(1);
  function startTime() {
    setTimeout(() => {
      if (timeLeft <= 0) {
        Navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }
  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });
  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}>
        TAKE A BREAK!
      </Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}>
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
