import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { PictureType } from "../interfaces/Interfaces";

export const Images: React.FC<PictureType> = ({ author, download_url }) => (
  <View style={styles.block}>
    <View style={styles.imageBlock}>
      <Image source={{ uri: download_url }} style={styles.picture} />
    </View>
    <Text style={styles.text}>{author}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: "#76e3e3",
    fontSize: 18,
    marginLeft: 15,
  },

  block: {
    width: "100%",
    height: 320,
    backgroundColor: "#2F4F4F",
    marginBottom: 5,
    borderRadius: 10,
  },

  imageBlock: {
    flex: 1,
  },

  picture: {
    borderRadius: 10,
    justifyContent: "center",
    height: "100%",
  },
});
