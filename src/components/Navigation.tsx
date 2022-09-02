import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Prop } from "../interfaces/Interfaces";
import { Button } from "./Button";

export const Navigation: React.FC<Prop> = ({ navigation }) => {

  const navigate = (value: string): void => {
    navigation.navigate(value);
  };

  
  return (
    <View style={styles.navContainer}>
      <Button text="Feeds" route="ImagePage" callback={navigate} />
      <Button text="Profile" route="Person" callback={navigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    marginTop: "11%",
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 5,
  },

  box: {
    width: "50%",
  },
});
