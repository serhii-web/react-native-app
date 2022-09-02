import React, { FC, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

import { useRoute  } from "@react-navigation/native";
import { IButton } from "../interfaces/Interfaces";

export const Button: FC<IButton> = ({ text, callback, route }) => {
  const nav = useRoute();
  const active = useMemo(() => (nav.name === route ? styles.active : {}) ,[nav])

  return (
    <View style={styles.box}>
      <Text
        style={{ ...styles.text, ...active }}
        onPress={() => callback(route)}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "50%",
  },
  text: {
    color: "#76e3e3",
    fontSize: 20,
    width: "100%",
    textAlign: "center"
  },
  active: {
    opacity: 0.5,
  },
});
